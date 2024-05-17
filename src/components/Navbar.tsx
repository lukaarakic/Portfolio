import { useState } from 'react'

import CopyButton from './CopyButton'
import Logo from './Logo'
import HomepageLogo from './HomepageLogo'
import { Link, useLocation } from 'react-router-dom'
import useWindowDimensions from '../utils/useWindowDimensions'

import Menu from '../assets/menu.svg?react'
import CloseSVG from '../assets/close.svg?react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHomepage = location.pathname === '/'

  const { width } = useWindowDimensions()

  function handleOnClick() {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-between px-20 pt-12 text-zinc-100">
        <Link to={'/'}>
          {isHomepage ? width > 580 ? <HomepageLogo /> : <Logo /> : ''}
        </Link>

        <div className="hidden items-center gap-14 text-18 md:flex">
          <Link to={'/about-me'}>About me</Link>
          <Link to={'/projects'}>Work</Link>
          <CopyButton copyValue="hello@lukarakic.me" />
        </div>

        <button
          className="flex items-center gap-4 rounded-40 border border-white px-12 py-4 text-24 md:hidden"
          onClick={handleOnClick}
        >
          <Menu className="w-10" /> Menu
        </button>
      </nav>

      <div
        className={`${open ? 'translate-x-0' : 'translate-x-full'} fixed left-0 top-0 z-50 h-screen w-full bg-zinc-900 transition-transform duration-300`}
      >
        <CloseSVG
          className="fixed right-12 top-12 w-20 cursor-pointer text-zinc-100"
          onClick={handleOnClick}
        />
      </div>
    </>
  )
}
export default Navbar
