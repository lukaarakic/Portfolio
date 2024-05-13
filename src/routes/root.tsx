import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ReactLenis from '@studio-freight/react-lenis'
import MouseTrailer from '../components/MouseTrailer'

const Root = () => {
  return (
    <ReactLenis root>
      <MouseTrailer />

      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </ReactLenis>
  )
}
export default Root
