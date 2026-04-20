import os
from dotenv import load_dotenv
from pathlib import Path
from huggingface_hub import InferenceClient

# Load .env
root_path = Path(__file__).resolve().parent.parent
env_path = root_path / ".env"
load_dotenv(dotenv_path=env_path)

token = os.getenv("HF_TOKEN")
if not token:
    print("❌ HF_TOKEN이 .env 파일에 없습니다.")
    exit(1)

clean_token = token.strip().replace('"', '').replace("'", "")
print(f"🔑 Token loaded (starts with): {clean_token[:5]}...")

# Qwen2.5-72B-Instruct 모델 테스트
HF_MODEL = "Qwen/Qwen2.5-72B-Instruct"

try:
    print(f"\n🚀 {HF_MODEL} 모델로 Chat API 요청 테스트 전송 중 (InferenceClient)...")
    client = InferenceClient(model=HF_MODEL, token=clean_token)
    
    response = client.chat_completion(
        messages=[
            {"role": "user", "content": "안녕! 넌 누구니? 짧게 대답해줘."}
        ],
        max_tokens=50
    )
    print("✅ 성공! 응답:")
    print(response.choices[0].message.content)
except Exception as e:
    print(f"❌ 요청 중 오류 발생: {e}")
