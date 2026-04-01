import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
// ChatBubble 컴포넌트가 있다면 이를 활용하는 것이 지침입니다.

const AIChatWindow = ({ onClose }) => {
  return (
    <div className='relative flex flex-col h-[675px] w-[480px] rounded-[24px] overflow-hidden bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-2xl'>
      {/* Header: VODA 바이브에 맞춘 색상 토큰 적용 */}
      <div className='flex items-center justify-between p-6 bg-primary-400 text-zinc-950'>
        <h2 className='text-xl font-bold'>VODA AI 어시스턴트</h2>
        <button onClick={onClose} className='cursor-pointer'>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      {/* Messages Area: ChatBubble 패턴 적용 */}
      <div className='flex-1 overflow-y-auto p-6 space-y-4'>
        {/* 타입에 따라 ChatBubble 호출 권장 */}
        <div className='self-start bg-zinc-800 p-4 rounded-2xl rounded-tl-none text-zinc-50'>
          안녕하세요! 어떤 영화를 찾으시나요?
        </div>
      </div>

      {/* Input Area: SearchBar(mode="ai")와 유사한 스타일 적용 */}
      <div className='p-6 bg-zinc-900 border-t border-white/10'>
        <div className='flex items-center gap-3 p-3 bg-white/5 rounded-xl'>
          <input
            type='text'
            placeholder='메시지를 입력하세요...'
            className='flex-1 bg-transparent outline-none text-zinc-50 placeholder:text-zinc-500'
          />
          <button className='text-primary-400 cursor-pointer'>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AIChatWindow