import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import Logo from '../../public/logo.svg?react'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BubbleButton from './BubbleButton'
import AnimatedLink from './AnimatedLink'

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const aboutSection = document.getElementById('about')
      if (!aboutSection) {
        return
      }

      ScrollTrigger.create({
        trigger: '#about',
        start: 'top 10%',
        end: 'bottom 10%',
        onEnter: () => {
          gsap.to('#white-stroke', {
            fill: '#27272a',
            duration: 0.3,
            ease: 'power2.out',
          })
        },
        onLeave: () => {
          gsap.to('#white-stroke', {
            fill: '#f1f5f9',
            duration: 0.3,
            ease: 'power2.out',
          })
        },
        onEnterBack: () => {
          gsap.to('#white-stroke', {
            fill: '#27272a',
            duration: 0.3,
            ease: 'power2.out',
          })
        },
        onLeaveBack: () => {
          gsap.to('#white-stroke', {
            fill: '#f1f5f9',
            duration: 0.3,
            ease: 'power2.out',
          })
        },
      })

      // Refresh ScrollTrigger after creation
      ScrollTrigger.refresh()
    }, 200)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-20 pt-12 text-zinc-100">
        <Link to={'/'}>
          <Logo className="w-16" />
        </Link>

        <div className="nav-items hidden items-center justify-center gap-14 rounded-10 bg-zinc-800 px-10 py-6 text-20 font-medium md:flex">
          <AnimatedLink scrollTo="#about">About me</AnimatedLink>

          <AnimatedLink to={'/projects'}>Work</AnimatedLink>

          <BubbleButton href="mailto:hello@lukarakic.me">Contact</BubbleButton>
        </div>

        <MobileMenu />
      </nav>
    </>
  )
}
export default Navbar
