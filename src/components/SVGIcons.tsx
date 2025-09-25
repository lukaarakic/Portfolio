import React from 'react'

// Import SVGs as URLs
import logoUrl from '../assets/logo.svg'
import arrowDownUrl from '../assets/arrow-down.svg'
import arrowRightUpUrl from '../assets/arrow-right-up.svg'
import closeUrl from '../assets/close.svg'
import githubUrl from '../assets/github.svg'
import menuUrl from '../assets/menu.svg'
import sendUrl from '../assets/send.svg'

interface SVGIconProps {
  className?: string
  onClick?: () => void
}

// Create React components for each SVG
export const LogoIcon: React.FC<SVGIconProps> = ({ className, onClick }) => (
  <img src={logoUrl} alt="Logo" className={className} onClick={onClick} />
)

export const ArrowDownIcon: React.FC<SVGIconProps> = ({
  className,
  onClick,
}) => (
  <img
    src={arrowDownUrl}
    alt="Arrow Down"
    className={className}
    onClick={onClick}
  />
)

export const ArrowRightUpIcon: React.FC<SVGIconProps> = ({
  className,
  onClick,
}) => (
  <img
    src={arrowRightUpUrl}
    alt="Arrow Right Up"
    className={className}
    onClick={onClick}
  />
)

export const CloseIcon: React.FC<SVGIconProps> = ({ className, onClick }) => (
  <img src={closeUrl} alt="Close" className={className} onClick={onClick} />
)

export const GithubIcon: React.FC<SVGIconProps> = ({ className, onClick }) => (
  <img src={githubUrl} alt="GitHub" className={className} onClick={onClick} />
)

export const MenuIcon: React.FC<SVGIconProps> = ({ className, onClick }) => (
  <img src={menuUrl} alt="Menu" className={className} onClick={onClick} />
)

export const SendIcon: React.FC<SVGIconProps> = ({ className, onClick }) => (
  <img src={sendUrl} alt="Send" className={className} onClick={onClick} />
)
