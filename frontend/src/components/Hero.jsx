import { EP } from '../api/tmdb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons'
import DetailBtn from './DetailBtn'

const Hero = ({ 
  type = 'home', 
  subtitle, 
  title, 
  description, 
  backdrop, 
  poster, 
  rating 
}) => {
  
  // 1. 인물 페이지 전용 히어로 (블러 배경 + 좌측 사진)
  if (type === 'person') {
    return (
      <section className='relative w-full h-[600px] flex items-center overflow-hidden bg-[#0e0e13]'>
        {/* 배경: 인물 타입만 블러 처리 */}
        <div className='absolute inset-0'>
          <img 
            src={EP.bg(backdrop)} 
            alt='' 
            className='size-full object-cover object-top blur-[40px] opacity-50 scale-110' 
          />
          <div className='absolute inset-0 bg-linear-to-r from-[#0e0e13] via-[#0e0e13]/40 to-transparent' />
          <div className='absolute inset-0 bg-linear-to-t from-[#0e0e13] via-transparent to-transparent' />
        </div>

        <div className='relative z-10 w-full px-12 md:px-20 flex flex-row items-center gap-12 md:gap-20'>
          {/* 좌측: 3:4 인물 사진 */}
          {poster && (
            <div className='hidden md:block shrink-0 w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10'>
              <img 
                src={EP.img(poster, 'w500')} 
                alt={title} 
                className='size-full object-cover'
              />
            </div>
          )}

          {/* 우측: 텍스트 정보 */}
          <div className='flex flex-col items-start max-w-2xl'>
            {subtitle && (
              <p className='text-primary-400 text-lg font-bold tracking-[0.25em] uppercase mb-4 font-serif'>
                {subtitle}
              </p>
            )}
            <h1 className='text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight font-serif'>
              {title}
            </h1>
            {description && (
              <p className='text-lg md:text-xl text-neutral-300 leading-relaxed font-serif font-medium line-clamp-6 whitespace-pre-wrap'>
                {description}
              </p>
            )}
          </div>
        </div>
      </section>
    )
  }

  // 2. 기본/상세/홈 히어로 (블러 없음, 기존 스타일 유지)
  return (
    <section className='relative w-full h-[85vh] min-h-[700px] overflow-hidden'>
      <div className='absolute inset-0'>
        <img 
          src={EP.bg(backdrop)} 
          alt={title} 
          className='size-full object-cover object-top' // 블러 클래스 없음
        />
        <div className='absolute inset-0 bg-linear-to-r from-[#0e0e13] via-[#0e0e13]/60 to-transparent' />
        <div className='absolute inset-0 bg-linear-to-t from-[#0e0e13] via-transparent to-transparent' />
      </div>

      <div className='relative h-full flex flex-col justify-center px-12 md:px-20 max-w-5xl gap-6'>
        {rating && (
          <div className='flex items-center gap-2 text-secondary-400 font-bold text-lg'>
            <FontAwesomeIcon icon={faStar} />
            <span>{rating.toFixed(1)}</span>
            <span className='text-neutral-500 text-sm font-normal ml-1'>/ 10</span>
          </div>
        )}

        <h1 className='text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl'>
          {title}
        </h1>

        <p className='text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl line-clamp-3 drop-shadow-md font-serif font-medium'>
          {description}
        </p>

        <div className='flex items-center gap-4 mt-4'>
          <DetailBtn label='지금 시청하기' icon={<FontAwesomeIcon icon={faPlay} />} variant='primary' />
          <DetailBtn label='상세 정보' icon={<FontAwesomeIcon icon={faInfoCircle} />} variant='secondary' />
        </div>
      </div>
    </section>
  )
}

export default Hero