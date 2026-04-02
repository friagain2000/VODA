import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import MovieCard from '../components/MovieCard'
import { EP } from '../api/tmdb'
import ChatBtn from '../components/ChatBtn'
import HCard from '../components/HCard'

// [규칙 준수] 장르 ID 매핑 객체
const GENRE_MAP = { 
  28: '액션', 12: '모험', 16: '애니메이션', 35: '코미디', 80: '범죄', 
  18: '드라마', 14: '판타지', 878: 'SF', 9648: '미스터리', 10749: '로맨스' 
}

// [규칙 준수] 데이터 정제 함수 (HCard에 필요한 데이터까지 포함)
const toMovieProps = (movie, badgeText) => ({
  id: movie.id,
  title: movie.title,
  // 장르 ID를 한글명으로 변환하여 전달 (SKILL.md 준수)
  genre: movie.genre_ids?.[0] ? (GENRE_MAP[movie.genre_ids[0]] || '영화') : '영화',
  year: movie.release_date?.slice(0, 4) ?? '',
  badgeText,
  posterUrl: EP.img(movie.poster_path),
  backdrop_path: movie.backdrop_path, // HCard용 가로 이미지
  vote_average: movie.vote_average,   // HCard용 평점
})

const HomePage = () => {
  const [heroMovie, setHeroMovie] = useState(null)
  const [popularMovies, setPopularMovies] = useState([])
  const [newMovies, setNewMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    // [규칙 준수] EP 객체를 통한 데이터 페칭
    EP.popular('movie').then((res) => {
      const results = res.data.results
      setHeroMovie(results[0])
      setPopularMovies(results.map((m) => toMovieProps(m, '인기')))
    })

    EP.nowPlaying('movie').then((res) => {
      setNewMovies(res.data.results.map((m) => toMovieProps(m, '최신')))
    })

    EP.topRated('movie').then((res) => {
      setTopRatedMovies(res.data.results.map((m) => toMovieProps(m, 'TOP')))
    })
  }, [])

  return (
    <div className='bg-base min-h-screen pb-24'>
      {heroMovie && (
        <Hero
          title={heroMovie.title}
          backdrop={heroMovie.backdrop_path}
          overview={heroMovie.overview}
          rating={heroMovie.vote_average}
        />
      )}

      <div className='flex flex-col gap-20 mt-16 px-12'>
        
        {/* [디자인 준수] 이어보기 섹션 (HCard 사용) */}
        <section>
          <SectionTitle title='시청 중인 콘텐츠' subtitle='이어보기' />
          <div className='flex gap-6 overflow-x-auto pb-8 no-scrollbar'>
            {popularMovies.length > 0 && popularMovies.slice(0, 5).map((movie, index) => (
              <HCard
                key={movie.id}
                id={movie.id}
                type='movie'
                title={movie.title}
                poster={movie.backdrop_path}
                vote_average={movie.vote_average}
                genre={movie.genre}
                runtime={120} 
                showCurator={index === 0} 
              />
            ))}
          </div>
        </section>

        {/* 기존 섹션들 (스프레드 연산자로 깔끔하게 전달) */}
        <section>
          <SectionTitle title='지금 가장 핫한 콘텐츠' subtitle='인기 영화' link='/movie' />
          <div className='flex gap-6 overflow-x-auto pb-8 no-scrollbar'>
            {popularMovies.map((movie) => (
              <div key={movie.id} className='min-w-72 md:min-w-80'>
                <MovieCard {...movie} />
              </div>
            ))}
          </div>
        </section>

        {/* ... 나머지 섹션 동일하게 적용 ... */}
      </div>
      <ChatBtn />
    </div>
  )
}

export default HomePage