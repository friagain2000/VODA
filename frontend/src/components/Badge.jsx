import { twMerge } from 'tailwind-merge'

const Badge = ({ children, variant = 'primary', className }) => {
  const base = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium'

  const variants = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    dark: 'bg-gray-800 text-white',
  }

  return (
    <span className={twMerge(base, variants[variant], className)}>
      {children}
    </span>
  )
}

export default Badge
