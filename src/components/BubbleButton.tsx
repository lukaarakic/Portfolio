import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface BubbleButtonProps {
  to?: string
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

const BubbleButton = ({
  to,
  href,
  children,
  className = '',
  onClick,
}: BubbleButtonProps) => {
  const baseClasses = `
    button-bubble
    relative
    overflow-hidden
    inline-block
    px-8 py-4
    text-20 font-medium text-sky-500
    border border-sky-500
    rounded-5
    transition-colors duration-300
    cursor-pointer
    ${className}
  `

  const content = (
    <>
      <span className="relative z-10 block transition-all duration-300">
        {children}
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    )
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {content}
    </button>
  )
}

export default BubbleButton
