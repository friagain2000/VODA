import urllib.request
import json

url = "http://localhost:8000/chat"
data = json.dumps({"text": "비 오는 날 어울리는 로맨스 영화 추천해줘"}).encode("utf-8")
headers = {"Content-Type": "application/json"}
req = urllib.request.Request(url, data=data, headers=headers)

try:
    print("요청 전송 중: http://localhost:8000/chat")
    with urllib.request.urlopen(req, timeout=30) as response:
        print("✅ 상태 코드:", response.status)
        result = json.loads(response.read().decode("utf-8"))
        print("🤖 AI 응답:\n", result.get("reply", result))
except Exception as e:
    print("❌ 연결 실패 또는 오류:", e)
