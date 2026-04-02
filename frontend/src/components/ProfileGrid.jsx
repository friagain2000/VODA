import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBell, faUser, faEye, faChevronRight, faArrowRightFromBracket 
} from '@fortawesome/free-solid-svg-icons'

// ✅ 지침 반영: 컴포넌트 외부로 추출
const Toggle = ({ on, onToggle }) => (
  <button
    onClick={onToggle}
    className={`flex h-7 w-14 shrink-0 p-1 rounded-full transition-colors cursor-pointer ${on ? 'bg-primary-400 justify-end' : 'bg-neutral-800 justify-start'}`}
  >
    <div className='size-5 rounded-full bg-neutral-50' />
  </button>
)

const CardTitle = ({ icon, title }) => (
  <div className='flex items-center gap-3 mb-8'>
    <FontAwesomeIcon icon={icon} className='text-neutral-400 text-xl' />
    <p className='font-serif text-2xl text-white'>{title}</p>
  </div>
)

const ProfileGrid = ({ user, onLogout }) => {
  const [alarmSettings, setAlarmSettings] = useState({
    curation: true,
    interest: true,
    marketing: false
  })

  const [viewSettings, setViewSettings] = useState({
    subtitle: true,
    autoplay: true
  })

  const toggleAlarm = (key) => setAlarmSettings(prev => ({ ...prev, [key]: !prev[key] }))
  const toggleView = (key) => setViewSettings(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className='flex flex-col gap-10 w-full max-w-screen-2xl mx-auto'>
      
      {/* 1. 상단 프로필 히어로 */}
      {/* ✅ rounded-[40px] -> rounded-3xl로 수정 */}
      <div className='bg-neutral-900/50 border border-white/5 flex items-center justify-between p-10 rounded-3xl'>
        <div className='flex items-center gap-8'>
          <div className='size-24 rounded-full bg-linear-to-br from-primary-400 to-secondary-400 p-0.5 shadow-glow-purple'>
            <div className='w-full h-full rounded-full bg-neutral-800 flex items-center justify-center text-3xl font-bold text-white'>
              {user?.name?.[0] || 'U'}
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-serif text-3xl text-white font-bold'>{user?.name}</p>
            <p className='font-serif text-lg text-neutral-500'>{user?.email}</p>
            {user?.isSubscribed && (
              <span className='mt-2 bg-secondary-500/20 text-secondary-400 border border-secondary-500/30 text-xs px-3 py-1 rounded-full w-fit'>
                PREMIUM SUBSCRIBER
              </span>
            )}
          </div>
        </div>
        <button className='bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-neutral-200 transition-colors cursor-pointer'>
          프로필 편집
        </button>
      </div>

      {/* 2. 설정 카드 그리드 */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        
        <div className='bg-neutral-900/30 p-8 rounded-3xl border border-white/5'>
          <CardTitle icon={faBell} title='알림 설정' />
          <div className='flex flex-col gap-6'>
            {[
              { key: 'curation', label: 'VODA 큐레이션' },
              { key: 'interest', label: '관심 콘텐츠 업데이트' },
              { key: 'marketing', label: '마케팅 정보 수신' }
            ].map(item => (
              <div key={item.key} className='flex items-center justify-between'>
                <span className='text-neutral-400 text-lg'>{item.label}</span>
                <Toggle on={alarmSettings[item.key]} onToggle={() => toggleAlarm(item.key)} />
              </div>
            ))}
          </div>
        </div>

        <div className='bg-neutral-900/30 p-8 rounded-3xl border border-white/5'>
          <CardTitle icon={faUser} title='계정 관리' />
          <div className='flex flex-col gap-4'>
            {['이메일 변경', '비밀번호 재설정', '결제 수단 관리', '구독 해지'].map(label => (
              <button key={label} className='flex items-center justify-between w-full p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer'>
                <span className='text-neutral-400 group-hover:text-white transition-colors'>{label}</span>
                <FontAwesomeIcon icon={faChevronRight} className='text-neutral-600' />
              </button>
            ))}
          </div>
        </div>

        <div className='bg-neutral-900/30 p-8 rounded-3xl border border-white/5'>
          <CardTitle icon={faEye} title='시청 환경' />
          <div className='flex flex-col gap-6'>
            {[
              { key: 'subtitle', label: '자막 자동 활성화' },
              { key: 'autoplay', label: '다음 회차 자동 재생' }
            ].map(item => (
              <div key={item.key} className='flex items-center justify-between'>
                <span className='text-neutral-400 text-lg'>{item.label}</span>
                <Toggle on={viewSettings[item.key]} onToggle={() => toggleView(item.key)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. 하단 액션 */}
      <div className='flex justify-center pt-4'>
        <button
          onClick={onLogout}
          className='flex items-center gap-3 px-12 py-4 rounded-full bg-neutral-900 border border-white/10 text-secondary-400 font-bold hover:bg-red-500/10 hover:border-red-500/20 transition-all cursor-pointer'
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span>VODA 로그아웃</span>
        </button>
      </div>

    </div>
  )
}

export default ProfileGrid