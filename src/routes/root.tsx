import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ReactLenis, { useLenis } from '@studio-freight/react-lenis'
import MouseTrailer from '../components/MouseTrailer'
import { useEffect } from 'react'
import { PrismicProvider } from '@prismicio/react'
import { client } from '../prismic'

const Root = () => {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    lenis?.scrollTo(0, {
      immediate: true,
    })
  }, [lenis, pathname])

  return (
    <PrismicProvider client={client}>
      <ReactLenis root>
        <MouseTrailer />

        <header>
          <Navbar />
        </header>

        <main className="h-full">
          <Outlet />
        </main>

        <Footer />
      </ReactLenis>
    </PrismicProvider>
  )
}
export default Root
