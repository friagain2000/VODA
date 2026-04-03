import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import MovieCard from '../components/MovieCard'
import { EP } from '../api/tmdb'

const NowPlayingPage = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    EP.nowPlaying('movie')
      .then((res) => {
        setMovies(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className='bg-neutral-950 min-h-screen pb-32'>
      {/* 피그마 헤더 섹션: 뒤로가기 + 제목 */}
      <div className='flex items-center gap-2.5 px-20 py-4'>
        <button
          onClick={() => navigate(-1)}
          className='flex items-center justify-center w-8 h-8 text-neutral-50 hover:text-primary-400 transition-colors bg-transparent border-none cursor-pointer'
        >
          <i className='fa-solid fa-arrow-left text-2xl' />
        </button>
        <h1 className='font-serif font-bold text-4xl leading-none tracking-tighter text-neutral-50 whitespace-nowrap'>
          현재 상영작
        </h1>
      </div>

      {/* 4열 그리드 */}
      {loading ? (
        <div className='px-20 pt-8 text-center text-neutral-500'>로딩 중...</div>
      ) : (
        <div className='grid grid-cols-4 gap-6 px-20 pt-6'>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              type='movie'
              title={movie.title}
              genre='영화'
              year={movie.release_date?.slice(0, 4)}
              posterUrl={EP.img(movie.poster_path)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default NowPlayingPage
