import CopyButton from './CopyButton'
import Logo from './Logo'
import HomepageLogo from './HomepageLogo'
import { Link, useLocation } from 'react-router-dom'
import useWindowDimensions from '../utils/useWindowDimensions'
import MobileMenu from './MobileMenu'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {
  const location = useLocation()
  const isHomepage = location.pathname === '/'

  const { width } = useWindowDimensions()

  useGSAP(() => {
    gsap.fromTo(
      '.nav-items > *',
      {
        y: 60,
        rotateX: -90,
        rotation: 5,
      },
      {
        y: 0,
        rotateX: 0,
        rotation: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: 'expo.out',
        delay: 2,
      },
    )
  })

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between px-20 pt-12 text-zinc-100">
        <Link to={'/'}>
          {isHomepage ? width > 580 ? <HomepageLogo /> : <Logo /> : <Logo />}
        </Link>

        <div className="nav-items hidden items-center gap-14 text-18 md:flex">
          <Link to={'/about-me'} className="underline-hover">
            About me
          </Link>
          <Link to={'/projects'} className="underline-hover">
            Work
          </Link>
          <CopyButton copyValue="hello@lukarakic.me" />
        </div>

        <MobileMenu />
      </nav>
    </>
  )
}
export default Navbar
