import os
import requests
from dotenv import load_dotenv
from pathlib import Path

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

HF_MODEL = "Qwen/Qwen2.5-72B-Instruct"

headers = {
    "Authorization": f"Bearer {clean_token}",
    "Content-Type": "application/json"
}

payload = {
    "model": HF_MODEL,
    "messages": [
        {"role": "user", "content": "안녕"}
    ],
    "max_tokens": 50
}

try:
    print(f"\n🚀 {HF_MODEL} 모델로 Chat API 요청 테스트 전송 중...")
    # 경로 수정
    url = f"https://api-inference.huggingface.co/models/{HF_MODEL}/v1/chat/completions"
    res2 = requests.post(url, headers=headers, json=payload)
    print(f"Status Code (Chat API): {res2.status_code}")
    if res2.status_code == 200:
        print(res2.json()['choices'][0]['message']['content'])
    else:
        print(res2.text)
except Exception as e:
    print(f"❌ 요청 중 오류 발생: {e}")
