import CopyButton from './CopyButton'
import Logo from './Logo'
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

    const navLinks = document.querySelectorAll('.nav-link')

    navLinks.forEach((link) => {
      const underline = link.querySelector('.underline')
      const tl = gsap.timeline({ paused: true })

      tl.fromTo(
        underline,
        {
          width: '0%',
          left: '0%',
        },
        {
          width: '100%',
          duration: 0.3,
        },
      )

      tl.add('midway')

      tl.fromTo(
        underline,
        {
          width: '100%',
          left: '0%',
        },
        {
          width: '0%',
          left: '100%',
          duration: 0.3,
          immediateRender: false,
        },
      )

      link.addEventListener('mouseenter', () => {
        tl.tweenFromTo(0, 'midway')
      })

      link.addEventListener('mouseleave', () => {
        tl.play()
      })
    })
  })

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between px-20 pt-12 text-zinc-100">
        <Link to={'/'}>
          {isHomepage ? width > 580 ? '' : <Logo /> : <Logo />}
        </Link>

        <div className="nav-items hidden items-center gap-14 text-18 md:flex">
          <Link to={'/about-me'} className="nav-link relative" key={'about-me'}>
            <span className="word">About me</span>
            <span className="underline"></span>
          </Link>

          <Link to={'/projects'} className="nav-link relative" key={'projects'}>
            <span className="word">Work</span>
            <span className="underline"></span>
          </Link>
          <CopyButton copyValue="hello@lukarakic.me" />
        </div>

        <MobileMenu />
      </nav>
    </>
  )
}
export default Navbar
