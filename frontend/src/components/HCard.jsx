import { Link } from 'react-router'
import { EP } from '../api/tmdb'

const HCard = ({ id, type, title, poster, progress }) => {
  return (
    <Link to={`/${type}/${id}`} className='w-110 flex-shrink-0'>
      <div className='aspect-video rounded-2xl overflow-hidden'>
        <img
          src={EP.img(poster, 'w780')}
          alt={title}
          className='size-full object-cover'
        />
      </div>
      <h3 className='mt-3 text-lg font-medium text-zinc-50 truncate'>{title}</h3>
      {progress != null && (
        <div className='mt-2 h-1 bg-zinc-700 rounded-full'>
          <div
            className='h-full bg-primary-400 rounded-full'
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </Link>
  )
}

export default HCard
