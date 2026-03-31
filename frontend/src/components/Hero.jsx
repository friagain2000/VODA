// 임시 이미지 URL (TMDB 연동 전까지 사용)
const imgHero = 'https://image.tmdb.org/t/p/original/nb3xI8S2nNnC36S2FJvMtGLj2eY.jpg' // 오펜하이머 배경
const imgHero1 = 'https://www.transparenttextures.com/patterns/cubes.png' // 패턴
const imgHero2 = 'https://image.tmdb.org/t/p/w500/8Gxv2mYqUjZGWpARcAVspC77N2W.jpg' // 오펜하이머 포스터

// SVG 경로 데이터
const svgPaths = {
  p15feb080: 'M19.4191 3.27154C19.7657 2.91266 19.9575 2.432 19.9532 1.93308C19.9488 1.43416 19.7487 0.956899 19.3959 0.604096C19.0431 0.251293 18.5658 0.051172 18.0669 0.0468365C17.568 0.042501 17.0873 0.234298 16.7285 0.580917L10 7.30938L3.27154 0.580917C3.09601 0.399175 2.88604 0.254212 2.65388 0.154486C2.42173 0.0547598 2.17204 0.00226738 1.91938 7.18458e-05C1.66672 -0.00212369 1.41616 0.0460211 1.1823 0.141698C0.94845 0.237375 0.735993 0.378667 0.55733 0.55733C0.378667 0.735993 0.237375 0.94845 0.141698 1.1823C0.0460211 1.41616 -0.00212369 1.66672 7.18458e-05 1.91938C0.00226738 2.17204 0.0547598 2.42173 0.154486 2.65388C0.254212 2.88604 0.399175 3.09601 0.580917 3.27154L7.30938 10L0.580917 16.7285C0.399175 16.904 0.254212 17.114 0.154486 17.3461C0.0547598 17.5783 0.00226738 17.828 7.18458e-05 18.0806C-0.00212369 18.3333 0.0460211 18.5838 0.141698 18.8177C0.237375 19.0515 0.378667 19.264 0.55733 19.4427C0.735993 19.6213 0.94845 19.7626 1.1823 19.8583C1.41616 19.954 1.66672 20.0021 1.91938 19.9999C2.17204 19.9977 2.42173 19.9452 2.65388 19.8455C2.88604 19.7458 3.09601 19.6008 3.27154 19.4191L10 12.6906L16.7285 19.4191C16.904 19.6008 17.114 19.7458 17.3461 19.8455C17.5783 19.9452 17.828 19.9977 18.0806 19.9999C18.3333 20.0021 18.5838 19.954 18.8177 19.8583C19.0515 19.7626 19.264 19.6213 19.4427 19.4427C19.6213 19.264 19.7626 19.0515 19.8583 18.8177C19.954 18.5838 20.0021 18.3333 19.9999 18.0806C19.9977 17.828 19.9452 17.5783 19.8455 17.3461C19.7458 17.114 19.6008 16.904 19.4191 16.7285L12.6906 10L19.4191 3.27154Z',
  p1c6e52c0: 'M8.57143 11.4286H0V8.57143H8.57143V0H11.4286V8.57143H20V11.4286H11.4286V20H8.57143V11.4286V11.4286',
  p1d4ca900: 'M3.06 16L4.36 10.0842L0 6.10526L5.76 5.57895L8 0L10.24 5.57895L16 6.10526L11.64 10.0842L12.94 16L8 12.8632L3.06 16Z',
  p2ea85800: 'M0 20V0L20 10L0 20ZM3.63636 14.7857L13.1818 10L3.63636 5.21429V14.7857Z',
  p38a2be00: 'M5.48 12.4842L8 10.8842L10.52 12.5053L9.86 9.47368L12.08 7.45263L9.16 7.17895L8 4.31579L6.84 7.1579L3.92 7.43158L6.14 9.47368L5.48 12.4842V12.4842M3.06 16L4.36 10.0842L0 6.10526L5.76 5.57895L8 0L10.24 5.57895L16 6.10526L11.64 10.0842L12.94 16L8 12.8632L3.06 16V16M8 8.63158V8.63158V8.63158V8.63158V8.63158V8.63158V8.63158V8.63158V8.63158V8.63158V8.63158V8.63158',
  p3a98f700: 'M2 0L4 4H7L5 0H7L9 4H12L10 0H12L14 4H17L15 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0V0V0M2 6V14V14V14H18V14V14V6H2V6M2 6V6V14V14V14V14V14V14V6V6',
  paaf5680: 'M0 21V0L16.5 10.5L0 21V21M3 10.5V10.5V10.5V10.5V10.5M3 15.525L10.875 10.5L3 5.475V15.525V15.525',
}

const Hero = () => {
  return (
    <section className='relative w-full h-[800px] bg-[#0e0e13] overflow-hidden' data-name='Hero'>
      {/* 배경 컨테이너 */}
      <div className='absolute inset-0' data-name='Background-Container'>
        <div className='relative w-full h-full' data-name='Featured-Movie'>
          <img 
            alt='오펜하이머 배경' 
            className='absolute h-full w-full object-cover' 
            src={imgHero} 
          />
        </div>
        {/* 그라데이션 오버레이 */}
        <div className='absolute bg-gradient-to-r from-[#0e0e13] from-[10%] via-[#0e0e13]/60 to-transparent inset-0' data-name='Gradient-Left' />
        <div className='absolute bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent inset-0' data-name='Gradient-Bottom' />
        <div 
          className='absolute inset-0 opacity-5' 
          data-name='Pattern-Overlay' 
          style={{ backgroundImage: `url('${imgHero1}')`, backgroundSize: '768px' }} 
        />
      </div>

      {/* 메인 콘텐츠 구역 */}
      <div className='relative h-full w-full max-w-[1920px] mx-auto px-8 md:px-[128px] flex items-center justify-between gap-12' data-name='Content-Layout'>
        
        {/* 왼쪽 텍스트 정보 */}
        <div className='flex flex-col gap-8 items-start relative z-10 w-full max-w-[800px]' data-name='Hero-Info'>
          
          {/* 배지 및 별점 */}
          <div className='flex gap-4 items-center h-9' data-name='Badges'>
            <div className='bg-secondary-400 flex items-center px-4 py-1.5 rounded-full shrink-0' data-name='Badge-VODA'>
              <span className='font-serif font-bold text-secondary-900 text-lg tracking-widest uppercase'>
                VODA ONLY
              </span>
            </div>
            <div className='flex gap-2 items-center p-1' data-name='Rating'>
              {[...Array(4)].map((_, i) => (
                <div key={i} className='size-4' data-name='Star-Icon'>
                  <svg className='block size-full' fill='none' viewBox='0 0 16 16'>
                    <path d={svgPaths.p1d4ca900} fill='#A78BFA' />
                  </svg>
                </div>
              ))}
              <div className='size-4' data-name='Star-Half-Icon'>
                <svg className='block size-full' fill='none' viewBox='0 0 16 16'>
                  <path d={svgPaths.p38a2be00} fill='#A78BFA' />
                </svg>
              </div>
            </div>
          </div>

          {/* 제목 */}
          <div className='relative' data-name='Heading'>
            <h1 className='font-sans font-medium text-white text-7xl md:text-9xl leading-[1.1] drop-shadow-2xl'>
              오펜하이머
            </h1>
          </div>

          {/* 설명 */}
          <div className='max-w-[700px]' data-name='Description'>
            <p className='font-serif font-normal text-zinc-400 text-2xl leading-relaxed'>
              세상을 영원히 바꾼 한 남자의 위대한 선택.<br />
              불가능을 가능케 한 과학의 예술과 고뇌를 마주하다.
            </p>
          </div>

          {/* 메타 정보 */}
          <div className='flex gap-6 items-center' data-name='Meta-Info'>
            <div className='px-2.5 py-0.5 border-2 border-zinc-700 rounded-md shrink-0' data-name='Age-Rating'>
              <span className='font-bold text-zinc-400 text-base'>15</span>
            </div>
            <span className='text-zinc-500 text-xl font-medium'>2023</span>
            <div className='bg-zinc-500 rounded-full size-1.5' />
            <span className='text-zinc-500 text-xl font-medium'>180분</span>
            <div className='bg-zinc-500 rounded-full size-1.5' />
            <span className='text-zinc-500 text-xl font-medium'>4K HDR</span>
          </div>

          {/* 액션 버튼 */}
          <div className='flex gap-6 items-center w-full' data-name='Actions'>
            <button className='bg-gradient-to-r from-primary-400 to-primary-600 flex gap-2 h-16 items-center px-10 py-5 rounded-full shadow-[0px_0px_40px_0px_rgba(167,139,250,0.5)] hover:scale-105 transition-transform cursor-pointer'>
              <div className='size-5'>
                <svg className='block size-full' fill='none' viewBox='0 0 20 20'>
                  <path d={svgPaths.p2ea85800} fill='#18181B' />
                </svg>
              </div>
              <span className='font-serif font-semibold text-zinc-950 text-2xl'>지금 보기</span>
            </button>
            
            <button className='backdrop-blur-md bg-white/5 border-2 border-white/10 flex gap-2.5 h-16 items-center px-10 py-5 rounded-full text-white text-2xl hover:bg-white/10 transition-colors cursor-pointer'>
              <div className='size-5'>
                <svg className='block size-full' fill='none' viewBox='0 0 20 20'>
                  <path d={svgPaths.p1c6e52c0} fill='currentColor' />
                </svg>
              </div>
              <span>찜하기</span>
            </button>

            <button className='backdrop-blur-md bg-white/5 border-2 border-white/10 flex gap-2.5 h-16 items-center px-10 py-5 rounded-full text-white text-2xl hover:bg-white/10 transition-colors cursor-pointer'>
              <div className='w-5 h-4'>
                <svg className='block size-full' fill='none' viewBox='0 0 20 16'>
                  <path d={svgPaths.p3a98f700} fill='currentColor' />
                </svg>
              </div>
              <span>예고편</span>
            </button>
          </div>
        </div>

        {/* 오른쪽 포스터 영역 */}
        <div className='hidden lg:flex items-center justify-center pr-12 relative z-10' data-name='Poster-Container'>
          <div className='rotate-[4deg] hover:rotate-0 transition-transform duration-500'>
            <div className='w-[400px] h-[580px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10' data-name='Poster'>
              <img 
                alt='오펜하이머 포스터' 
                className='w-full h-full object-cover' 
                src={imgHero2} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* 닫기 버튼 */}
      <button 
        aria-label='Hero 섹션 닫기'
        className='absolute top-10 right-10 backdrop-blur-md bg-white/5 border-2 border-white/10 rounded-full size-16 cursor-pointer flex items-center justify-center hover:bg-white/10 transition-colors z-20'
      >
        <div className='size-6'>
          <svg className='block size-full' fill='none' viewBox='0 0 20 20'>
            <path d={svgPaths.p15feb080} fill='#FAFAFA' />
          </svg>
        </div>
      </button>
    </section>
  )
}

export default Hero
