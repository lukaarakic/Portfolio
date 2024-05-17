import CopyButton from './CopyButton'
import Logo from './Logo'
import HomepageLogo from './HomepageLogo'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const isHomepage = location.pathname === '/'

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 hidden items-center justify-between px-20 pt-12 text-zinc-100 lg:flex">
      <Link to={'/'}>{isHomepage ? <HomepageLogo /> : <Logo />}</Link>

      <div className="flex items-center gap-14 text-18">
        <Link to={'/about-me'}>About me</Link>
        <Link to={'/projects'}>Work</Link>
        <CopyButton copyValue="hello@lukarakic.me" />
      </div>
    </nav>
  )
}
export default Navbar
