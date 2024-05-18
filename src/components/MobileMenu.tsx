import { Link } from 'react-router-dom'
import gsap from 'gsap'

import Menu from '../assets/menu.svg?react'
import CloseSVG from '../assets/close.svg?react'

const MobileMenu = () => {
  const tl = gsap.timeline({ paused: true })
  tl.to('.menu', { x: 0, duration: 0.3 })
  tl.to('.menu-item', { x: 0, duration: 0.3, opacity: 1, stagger: 0.2 })

  const handleOpen = () => {
    tl.play()
  }

  const handleClose = () => {
    tl.reverse()
  }

  return (
    <>
      <button
        className="flex items-center gap-4 rounded-40 border border-white px-12 py-4 text-24 md:hidden"
        onClick={handleOpen}
      >
        <Menu className="w-10" /> Menu
      </button>

      <div
        className={`menu fixed left-0 top-0 z-40 flex h-dvh w-full translate-x-full items-end bg-zinc-950 p-20`}
      >
        <CloseSVG
          className="fixed right-24 top-14 z-50 w-20 cursor-pointer text-zinc-100"
          onClick={handleClose}
        />

        <ul className="space-y-10">
          <li className="menu-item translate-x-12 opacity-0">
            <Link to={'/about-me'} className="text-64" onClick={handleClose}>
              About me
            </Link>
          </li>
          <li className="menu-item translate-x-12 opacity-0">
            <Link to={'/projects'} className="text-64" onClick={handleClose}>
              Work
            </Link>
          </li>
          <li className="menu-item translate-x-12 opacity-0">
            <a href="mailto:lukarakic.me" className="text-64">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
export default MobileMenu
