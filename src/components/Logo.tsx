import LogoIcon from '../assets/Logo.svg?react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Logo = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.logo-icon path',
      {
        y: '100%',
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: 'power1.out',
        duration: 0.7,
      },
    )
  }, [])

  return (
    <div className={'w-[15.6rem] overflow-hidden'}>
      <LogoIcon className="logo-icon" />
    </div>
  )
}
export default Logo
