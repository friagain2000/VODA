import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faXmark } from '@fortawesome/free-solid-svg-icons'
import AIChatWindow from './AIChatWindow'

const ChatBtn = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='fixed bottom-6 right-6 z-50'>
        <button
          className={twMerge(
            'flex items-center justify-center rounded-full transition-all duration-300 size-16 shadow-lg cursor-pointer',
            'bg-primary-400 hover:bg-primary-500 text-zinc-950', // @theme 토큰 사용
            isOpen && 'rotate-90'
          )}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faCommentDots} className='text-2xl' />
        </button>
      </div>

      {isOpen && (
        <div className='fixed bottom-[100px] right-6 z-50 animate-in fade-in slide-in-from-bottom-4'>
          <AIChatWindow onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  )
}

export default ChatBtn