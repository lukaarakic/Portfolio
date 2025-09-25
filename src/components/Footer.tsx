import { useEffect, useState } from 'react'
import Marquee from './Marquee'
import Logo from '../assets/logo.svg?react'
import AnimatedLink from './AnimatedLink'

const Footer = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const lastSection = document.querySelector('#last-section')
      if (lastSection) {
        const rect = lastSection.getBoundingClientRect()
        const isInView =
          rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0
        setIsSticky(isInView)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className={`${isSticky ? 'sticky bottom-0' : ''}`}>
      <a href="mailto:hello@lukarakic.me">
        <Marquee text="Let's Connect" className="my-8" />
      </a>

      <div className="px-20">
        <p className="text-30 font-medium text-zinc-100/75">Contact</p>
        <ul className="mb-40 mt-5 space-y-4">
          <li>
            <AnimatedLink
              href="http://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </AnimatedLink>
          </li>
          <li>
            <AnimatedLink
              href="http://upwork.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upwork
            </AnimatedLink>
          </li>
          <li>
            <AnimatedLink href="mailto:hello@lukarakic.me">
              hello@lukarakic.me
            </AnimatedLink>
          </li>
        </ul>

        <div className="flex w-fit pb-32">
          <div className="border border-slate-100/50 p-6">
            <Logo className="w-14" />
          </div>

          <div className="grid grid-rows-2 items-center">
            <div className="border border-l-0 border-slate-100/50 p-4 px-8">
              <p className="text-18">All Rights Reserved</p>
            </div>
            <div className="border border-l-0 border-t-0 border-slate-100/50 p-4 px-8">
              <p className="text-18">© 2024 Luka Rakic</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
