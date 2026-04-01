import { NavLink, Link } from 'react-router'
import { twMerge } from 'tailwind-merge'

const NAV_ITEMS = [
  { path: '/', label: '홈' },
  { path: '/movie', label: '영화보다' },
  { path: '/tv', label: 'TV보다' },
  { path: '/person', label: '사람을 보다' },
  { path: '/ask', label: '물어보다' },
  { path: '/search', label: '찾아보다' },
]

const GNB = () => {
  return (
    <nav className='sticky top-0 z-50 h-20 bg-[#0e0e13]/80 backdrop-blur-md border-b border-white/5'>
      <div className='max-w-[1920px] mx-auto h-full px-12 flex items-center justify-between'>
        {/* 로고 */}
        <div className='flex items-center gap-12'>
          <Link to='/' className='text-3xl font-black text-primary-400 tracking-tighter'>
            VODA
          </Link>

          {/* 내비게이션 탭 */}
          <ul className='flex items-center gap-8 text-lg font-medium text-white/50'>
            {NAV_ITEMS.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    twMerge(
                      'hover:text-white transition-colors py-2',
                      isActive && 'text-white font-bold'
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 우측 유틸리티 (프로필) */}
        <div className='flex items-center gap-4'>
          <Link to='/profile' className='w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors'>
            <span className='text-xs font-bold text-white/30'>PRO</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default GNB
