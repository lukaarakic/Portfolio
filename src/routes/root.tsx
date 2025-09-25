import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ReactLenis, { useLenis } from '@studio-freight/react-lenis'
import { useEffect } from 'react'

const Root = () => {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    lenis?.scrollTo(0, {
      immediate: true,
    })
  }, [lenis, pathname])

  return (
    <ReactLenis root>
      <header>
        <Navbar />
      </header>

      <Outlet />

      <Footer />
    </ReactLenis>
  )
}
export default Root
