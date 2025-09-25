import { useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

interface AnimatedLinkProps {
  href?: string
  to?: string
  scrollTo?: string // For scroll-to-section functionality
  children: string
  className?: string
  target?: string
  rel?: string
  variant?: 'white-to-blue' | 'blue-to-white'
}

const AnimatedLink = ({
  href,
  to,
  scrollTo,
  children,
  className = '',
  target,
  rel,
  variant = 'white-to-blue',
}: AnimatedLinkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  const handleScrollClick = (e: React.MouseEvent) => {
    e.preventDefault()

    const scrollToElement = () => {
      const element = document.querySelector(scrollTo!)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation to complete, then scroll
      setTimeout(scrollToElement, 100)
    } else {
      scrollToElement()
    }
  }

  const handleMouseEnter = (linkElement: HTMLAnchorElement) => {
    const originalLetters = linkElement.querySelectorAll('.original-letter')
    const hoverLetters = linkElement.querySelectorAll('.hover-letter')

    gsap.set(originalLetters, { y: '0%' })
    gsap.set(hoverLetters, { y: '0%' })

    originalLetters.forEach((letter, index) => {
      gsap.to(letter, {
        y: '-100%',
        duration: 0.3,
        delay: index * 0.05,
        ease: 'power2.out',
      })
    })

    const hoverColor =
      variant === 'white-to-blue' ? 'rgb(14 165 233)' : 'rgb(241 245 249)'

    hoverLetters.forEach((letter, index) => {
      gsap.to(letter, {
        y: '-100%',
        color: hoverColor,
        duration: 0.3,
        delay: index * 0.05,
        ease: 'power2.out',
      })
    })
  }

  const handleMouseLeave = (linkElement: HTMLAnchorElement) => {
    const originalLetters = linkElement.querySelectorAll('.original-letter')
    const hoverLetters = linkElement.querySelectorAll('.hover-letter')

    gsap.killTweensOf([originalLetters, hoverLetters])

    const leaveColor =
      variant === 'white-to-blue' ? 'rgb(241 245 249)' : 'rgb(14 165 233)'

    originalLetters.forEach((letter) => {
      gsap.to(letter, {
        y: '0%',
        duration: 0.2,
        ease: 'power2.out',
      })
    })

    hoverLetters.forEach((letter) => {
      gsap.to(letter, {
        y: '100%',
        color: leaveColor,
        duration: 0.2,
        ease: 'power2.out',
      })
    })
  }

  const letters = children.split('')

  const originalColor =
    variant === 'white-to-blue' ? 'text-zinc-100' : 'text-sky-500'
  const hoverColorClass =
    variant === 'white-to-blue' ? 'text-sky-500' : 'text-zinc-100'

  const linkContent = (
    <span className="inline-block overflow-hidden">
      {letters.map((letter, index) => (
        <span key={index} className="relative inline-block">
          <span className="original-letter inline-block">
            {letter === ' ' ? '\u00A0' : letter}
          </span>
          <span
            className={`hover-letter absolute left-0 top-full inline-block ${hoverColorClass}`}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        </span>
      ))}
    </span>
  )

  const commonProps = {
    className: `relative inline-block text-20 font-medium ${originalColor} ${className}`,
    onMouseEnter: (e: React.MouseEvent<HTMLAnchorElement>) =>
      handleMouseEnter(e.currentTarget),
    onMouseLeave: (e: React.MouseEvent<HTMLAnchorElement>) =>
      handleMouseLeave(e.currentTarget),
  }

  if (scrollTo) {
    return (
      <a
        ref={linkRef}
        href={`#${scrollTo.replace('#', '')}`}
        onClick={handleScrollClick}
        {...commonProps}
      >
        {linkContent}
      </a>
    )
  }

  if (to) {
    return (
      <Link ref={linkRef} to={to} {...commonProps}>
        {linkContent}
      </Link>
    )
  }

  return (
    <a ref={linkRef} href={href} target={target} rel={rel} {...commonProps}>
      {linkContent}
    </a>
  )
}

export default AnimatedLink
