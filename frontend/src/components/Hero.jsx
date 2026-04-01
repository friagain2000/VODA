import { EP } from '../api/tmdb'

/**
 * Hero: 메인 히어로 섹션
 * 
 * @param {string} title - 제목
 * @param {string} backdrop - 배경 이미지 경로
 * @param {string} overview - 줄거리 요약
 * @param {number} rating - 평점
 */
const Hero = ({ title, backdrop, overview, rating }) => {
  return (
    <section className='relative h-[70vh] min-h-[600px] flex flex-col justify-end px-12 pb-24 overflow-hidden'>
      {/* 배경 이미지 및 그라데이션 오버레이 */}
      <div className='absolute inset-0 -z-10 bg-zinc-950'>
        {backdrop && (
          <img 
            src={EP.bg(backdrop)} 
            alt={title} 
            className='size-full object-cover opacity-50'
          />
        )}
        {/* 비네팅 & 하단 그라데이션 */}
        <div className='absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#0e0e13]/60 via-transparent to-transparent' />
      </div>

      {/* 콘텐츠 */}
      <div className='max-w-[800px]'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='bg-primary-400 text-primary-900 px-3 py-1 rounded font-bold text-sm uppercase tracking-wide'>
            VODA ORIGINAL
          </span>
          {rating > 0 && (
            <span className='text-zinc-50 font-bold'>★ {rating.toFixed(1)}</span>
          )}
        </div>
        <h1 className='text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl tracking-tighter'>
          {title}
        </h1>
        <p className='text-zinc-300 text-lg md:text-xl leading-relaxed mb-10 line-clamp-3 drop-shadow-lg font-medium'>
          {overview}
        </p>
        <div className='flex items-center gap-4'>
          <button className='bg-white text-zinc-950 px-8 py-3 rounded-lg font-bold text-lg hover:bg-zinc-200 transition-colors'>
            재생하기
          </button>
          <button className='bg-zinc-800/80 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-zinc-700 transition-colors backdrop-blur-md'>
            상세 정보
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
