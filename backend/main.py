from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from pathlib import Path
from dotenv import load_dotenv
from huggingface_hub import InferenceClient
import json

# 1. 환경 변수 로드
root_path = Path(__file__).resolve().parent.parent
env_path = root_path / ".env"

if env_path.exists():
    load_dotenv(dotenv_path=str(env_path), override=True)
    print(f"✅ .env 로드 성공: {env_path}")
    print(f"   HF_TOKEN: {os.getenv('HF_TOKEN', 'NOT SET')[:20]}...")
else:
    load_dotenv()
    print("⚠️ .env 파일을 찾을 수 없습니다. 기본 설정을 사용합니다.")

app = FastAPI(title="VODA AI Backend")

# CORS 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    text: str

# Hugging Face 설정
HF_MODEL = "Qwen/Qwen2.5-72B-Instruct" 

def ask_ai(q: str) -> str:
    token = os.getenv("HF_TOKEN")
    
    if not token:
        return "[알림] .env 파일에 HF_TOKEN이 설정되지 않았습니다."
    
    # 토큰에서 따옴표, 공백 등 불순물 제거
    clean_token = token.strip().strip('"').strip("'")
    
    print(f"🚀 AI 요청 전송 (Token length: {len(clean_token)}): {q}")
    
    try:
        # 모델명을 명시적으로 확인 (필요시 교체 가능)
        client = InferenceClient(model=HF_MODEL, token=clean_token)
        
        response = client.chat_completion(
            messages=[
                {"role": "system", "content": "당신은 VODA 서비스의 친절한 영화 추천 전문가입니다. 한국어로 답변하세요. 짧고 명확하게 답변해 주세요."},
                {"role": "user", "content": q}
            ],
            max_tokens=500,
            temperature=0.7
        )
        
        if not response.choices:
            return "AI로부터 응답을 받지 못했습니다. 다시 시도해 주세요."

        reply = response.choices[0].message.content
        print(f"✅ AI 응답 성공")
        return reply
            
    except Exception as e:
        error_msg = str(e)
        print(f"❌ AI 호출 상세 에러: {error_msg}")
        
        if "401" in error_msg:
            return "AI 서비스 인증에 실패했습니다 (401 Unauthorized). HF_TOKEN을 확인해 주세요."
        if "503" in error_msg or "loading" in error_msg.lower():
            return "AI 모델이 현재 준비 중입니다. 잠시 후 다시 시도해 주세요."
            
        return f"AI 호출 오류: {error_msg}"

@app.post("/chat")
async def chat(req: ChatRequest):
    if not req.text.strip():
        raise HTTPException(status_code=400, detail="메시지가 비어있습니다.")
    
    reply = ask_ai(req.text)
    return {"reply": reply}

@app.get("/")
def read_root():
    return {
        "status": "VODA AI Backend is active", 
        "env_loaded": env_path.exists(),
        "has_token": bool(os.getenv("HF_TOKEN")),
        "token_preview": os.getenv("HF_TOKEN")[:10] + "..." if os.getenv("HF_TOKEN") else None
    }
