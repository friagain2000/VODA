import { twMerge } from 'tailwind-merge'

const Card = ({ title, poster, rating, genre, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        'relative w-40 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow',
        className
      )}
    >
      {/* 포스터 이미지 */}
      <div className='aspect-[2/3] bg-gray-800'>
        {poster && (
          <img
            src={poster}
            alt={title}
            className='w-full h-full object-cover'
          />
        )}
      </div>

      {/* 정보 */}
      <div className='p-2 bg-gray-900 text-white'>
        <p className='text-sm font-semibold truncate'>{title}</p>
        <div className='flex items-center justify-between mt-1'>
          {genre && (
            <span className='text-xs text-gray-400'>{genre}</span>
          )}
          {rating && (
            <span className='text-xs text-yellow-400'>★ {rating}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
