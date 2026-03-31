import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { twMerge } from 'tailwind-merge'

const SectionTitle = ({ title, subtitle, link, icon, className }) => {
  const TitleContent = (
    <div className='flex items-center gap-3'>
      {icon ? (
        <FontAwesomeIcon icon={icon} className='text-[#a78bfa] text-2xl' />
      ) : (
        <div className='w-[12px] h-[48px] bg-[#a78bfa] rounded-sm' />
      )}
      <div>
        <h2 className='text-[#fafafa] text-2xl font-bold group-hover:text-white transition-colors'>
          {title}
        </h2>
        {subtitle && <p className='text-[#a1a1aa] text-sm mt-1'>{subtitle}</p>}
      </div>
    </div>
  )

  return (
    <div className={twMerge('flex items-center justify-between mb-8 group', className)}>
      {link ? (
        <Link to={link} className='flex items-center justify-between w-full'>
          {TitleContent}
          <div className='flex items-center gap-1 text-[#a78bfa] text-sm opacity-0 group-hover:opacity-100 transition-opacity'>
            전체보기
            <FontAwesomeIcon icon={faChevronRight} className='text-xs' />
          </div>
        </Link>
      ) : (
        TitleContent
      )}
    </div>
  )
}

export default SectionTitle