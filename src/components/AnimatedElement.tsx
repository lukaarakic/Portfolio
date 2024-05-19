import split from '../utils/split'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

interface AnimatedElementProps {
  text: string
  className?: string
  id: string
  delay: number
  Wrapper?: keyof JSX.IntrinsicElements
}

const AnimatedElement = ({
  text,
  className,
  id,
  delay,
  Wrapper = 'p',
}: AnimatedElementProps) => {
  const wordsToHighlight = [
    'web',
    'developer',
    'increase',
    'conversion',
    'reach',
    'customers',
  ]
  const regex = new RegExp(`\\b(${wordsToHighlight.join('|')})\\b`, 'gi')
  const { words } = split(text)

  useGSAP(() => {
    gsap
      .fromTo(
        `#${id} > div > span`,
        {
          y: 60,
          rotateX: -90,
          rotation: 5,
        },
        {
          y: 0,
          rotateX: 0,
          rotation: 0,
          stagger: 0.1,
          duration: 1.5,
          ease: 'expo.out',
          delay: delay,
        },
      )
      .timeScale(1.5)
  })

  return (
    <Wrapper
      className={`${className} flex flex-wrap gap-x-4 overflow-hidden`}
      id={id}
    >
      {words?.map((word, i) => (
        <div key={word + i} className="overflow-hidden">
          <span
            className={`${word.match(regex) ? 'text-zinc-100' : ''} inline-block`}
          >
            {word}
          </span>
        </div>
      ))}
    </Wrapper>
  )
}
export default AnimatedElement
