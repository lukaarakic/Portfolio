import CopyButton from './CopyButton'
import Logo from './Logo'
import HomepageLogo from './HomepageLogo'
import { Link, useLocation } from 'react-router-dom'
import useWindowDimensions from '../utils/useWindowDimensions'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const location = useLocation()
  const isHomepage = location.pathname === '/'

  const { width } = useWindowDimensions()

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between px-20 pt-12 text-zinc-100">
        <Link to={'/'}>
          {isHomepage ? width > 580 ? <HomepageLogo /> : <Logo /> : <Logo />}
        </Link>

        <div className="hidden items-center gap-14 text-18 md:flex">
          <Link to={'/about-me'}>About me</Link>
          <Link to={'/projects'}>Work</Link>
          <CopyButton copyValue="hello@lukarakic.me" />
        </div>

        <MobileMenu />
      </nav>
    </>
  )
}
export default Navbar
