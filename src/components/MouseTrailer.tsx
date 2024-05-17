import { useEffect, useRef, useState } from 'react'
import Arrow from '../assets/arrow-right-up.svg?react'

const MouseTrailer = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [showArrow, setShowArrow] = useState(false)

  const animateTrailer = (e: MouseEvent, interacting: boolean) => {
    if (!ref.current) {
      return
    }

    setShowArrow(interacting)

    const x = e.clientX - ref.current?.offsetWidth / 2
    const y = e.clientY - ref.current?.offsetHeight / 2

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`,
    }

    ref.current.animate(keyframes, {
      duration: 300,
      fill: 'forwards',
    })
  }

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      // @ts-expect-error closest() method does not exit?
      const interactable = e.target.closest('.interactable')
      const interacting = interactable !== null

      animateTrailer(e, interacting)
    }

    document.addEventListener('mousemove', onMouseMove)

    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div
      ref={ref}
      id="trailer"
      className={`${showArrow ? 'bg-zinc-100' : 'mix-blend-exclusion'}`}
    >
      <Arrow
        className={`${
          showArrow ? 'opacity-100' : 'opacity-0'
        } text-zinc-800 transition-opacity`}
      />
    </div>
  )
}
export default MouseTrailer
