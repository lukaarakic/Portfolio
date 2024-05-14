import Copy from '../assets/file-copy.svg?react'
import CopyButton from './CopyButton'
import Logo from './Logo'
import HomepageLogo from './HomepageLogo'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const isHomepage = location.pathname === '/'

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between px-20 pt-12 text-zinc-100">
      <Link to={'/'}>{isHomepage ? <HomepageLogo /> : <Logo />}</Link>

      <div className="flex items-center gap-14 text-18">
        <Link to={'/about-me'}>About me</Link>
        <Link to={'/projects'}>Work</Link>
        <CopyButton copyValue="hello@lukarakic.me">
          <Copy className="w-8" />
          hello@lukarakic.me
        </CopyButton>
      </div>
    </nav>
  )
}
export default Navbar
