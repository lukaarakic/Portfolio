import LogoIcon from '../assets/Logo.svg?react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const HomepageLogo = () => {
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

    gsap.to('.logo-icon-wrapper', {
      scrollTrigger: {
        trigger: '.project-section',
        start: '-=100 bottom',
        toggleActions: 'play none none reverse',
      },
      width: '15.6rem',
      marginTop: '-2.5rem',
      cursor: 'pointer',
    })
  }, [])

  return (
    <div
      className={
        'logo-icon-wrapper absolute mx-auto mt-20 w-[95vw] cursor-default overflow-hidden'
      }
    >
      <LogoIcon className="logo-icon" />
    </div>
  )
}
export default HomepageLogo
