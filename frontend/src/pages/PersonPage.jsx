// TODO: 인물 목록 페이지 구현 (B팀)
const PersonPage = () => {
  return (
    <div className='text-white px-12 py-16'>
      <h1 className='text-4xl font-black mb-4 tracking-tighter'>사람을 보다</h1>
      <p className='text-zinc-500 text-lg'>인기 배우와 감독들을 준비 중입니다.</p>
      
      <div className='mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
        {/* 자리표시자 스켈레톤 */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className='flex flex-col items-center gap-4 animate-pulse'>
            <div className='w-full aspect-square rounded-full bg-zinc-800' />
            <div className='h-4 w-20 bg-zinc-800 rounded' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PersonPage
