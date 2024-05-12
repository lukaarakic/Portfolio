import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonLinkProps {
  children: ReactNode
  to: string
  className?: string
}

const ButtonLink = ({ children, to, className }: ButtonLinkProps) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-4 rounded-full border border-zinc-100 p-4 px-12 text-20 ${className}`}
    >
      {children}
    </Link>
  )
}
export default ButtonLink
