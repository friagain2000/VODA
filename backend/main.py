from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests, os
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Msg(BaseModel):
    text: str

HF_MODEL = "Qwen/Qwen2.5-72B-Instruct"
HF_URL = f"https://api-inference.huggingface.co/models/{HF_MODEL}"

def ask_ai(q: str) -> str:
    token = os.getenv("HF_TOKEN")
    if not token:
        # 토큰이 없을 경우 개발용 테스트 응답을 반환하여 서버가 작동함을 보여줌
        return f"[테스트 모드] VODA AI입니다. 질문하신 '{q}'에 대한 답변을 준비 중입니다. (HF_TOKEN 설정 필요)"
        
    headers = {"Authorization": f"Bearer {token}"}
    # Inference API 방식에 맞는 payload 구성
    payload = {
        "inputs": q,
        "parameters": {"max_new_tokens": 300, "return_full_text": False}
    }
    
    try:
        res = requests.post(HF_URL, headers=headers, json=payload, timeout=20)
        res.raise_for_status()
        data = res.json()
        
        # 응답 형태에 따라 처리 (List 형식으로 오는 경우 대응)
        if isinstance(data, list) and len(data) > 0:
            return data[0].get("generated_text", str(data[0]))
        return str(data)
    except Exception as e:
        return f"AI 서비스 호출 중 오류가 발생했습니다: {str(e)}"

@app.post("/chat")
def chat(msg: Msg):
    reply = ask_ai(msg.text)
    return {"reply": reply}