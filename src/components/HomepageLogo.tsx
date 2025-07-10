import LogoIcon from '../assets/Logo.svg?react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const calcPosition = () => {
  const availableWork = document.querySelector('.available-work')
  const introText = document.querySelector('.intro-text')
  const logoHeight =
    document.querySelector('.logo-icon-wrapper')?.clientHeight || 500

  if (availableWork && introText) {
    console.log(
      availableWork.getBoundingClientRect().height +
        introText.getBoundingClientRect().height +
        logoHeight,
    )

    return (
      availableWork.getBoundingClientRect().height +
      introText.getBoundingClientRect().height +
      110
    )
  }
}

const HomepageLogo = () => {
  const [height, setHeight] = useState(() => {
    return calcPosition()
  })

  useEffect(() => {
    setHeight(calcPosition)
  }, [])

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
      top: '1rem',
      left: '5rem',
      bottom: 'auto',
      cursor: 'pointer',
      immediateRender: false,
    })
  }, [])

  return (
    <div
      className={`logo-icon-wrapper fixed z-50 mx-auto mt-[2vh] w-[95%] max-w-[2500px] cursor-default overflow-hidden`}
      style={{
        bottom: `${height}px`,
      }}
    >
      <LogoIcon className="logo-icon" />
    </div>
  )
}
export default HomepageLogo
