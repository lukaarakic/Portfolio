import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ArrowUpRight from '../assets/arrow-right-up.svg?react'

gsap.registerPlugin(ScrollTrigger)

interface ProjectCardProps {
  index: number
  className?: string
  alt?: string
  imageUrl: string
  to: string
  name: string
  tags: string[]
  disableScrollAnimation?: boolean
}

const ProjectCard = ({
  className,
  imageUrl,
  alt,
  to,
  name,
  tags,
  index,
  disableScrollAnimation = false,
}: ProjectCardProps) => {
  const [opacity, setOpacity] = useState(0)
  const [scale, setScale] = useState(0)
  const navigate = useNavigate()
  const cardRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const cardElement = cardRef.current
    const imageElement = imageRef.current

    if (cardElement && imageElement) {
      if (disableScrollAnimation) {
        gsap.set(cardElement, {
          x: 0,
          y: 0,
          opacity: 1,
        })

        gsap.set(imageElement, {
          scale: 1,
        })
      } else {
        gsap.set(cardElement, {
          x: -200,
          y: 200,
          opacity: 0,
        })

        gsap.set(imageElement, {
          scale: 1.4,
        })

        gsap.to(cardElement, {
          x: 0,
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: cardElement,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1.5,
            toggleActions: 'play none none reverse',
          },
        })

        gsap.to(imageElement, {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: cardElement,
            start: 'top 90%',
            end: 'top 50%',
            scrub: 1.5,
            toggleActions: 'play none none reverse',
          },
        })
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === cardElement) {
          trigger.kill()
        }
      })
    }
  }, [index, disableScrollAnimation])

  function onEnter() {
    setOpacity(1)
    setScale(1)
  }

  function onLeave() {
    setOpacity(0)
    setScale(0)
  }

  function onClick() {
    navigate(`/project/${to}`)
  }

  return (
    <article
      ref={cardRef}
      className={`${className} relative flex cursor-pointer flex-col overflow-hidden`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-10">
        <img
          ref={imageRef}
          src={imageUrl}
          alt={alt}
          className="w-full rounded-10 object-cover object-center"
        />
        <div
          className="absolute inset-0 rounded-10 bg-black/40 transition-all duration-300"
          style={{
            opacity,
          }}
        />
      </div>

      <div className="mt-4 flex items-center justify-center gap-24">
        <span className="text-18 text-zinc-100/50">0{index + 1}.</span>
        <h2 className="text-30 font-medium text-zinc-100/50">{name}</h2>
        <div className="ml-auto flex items-center gap-4">
          {tags.map((tag, i) => (
            <p
              className="rounded-5 border border-zinc-100/50 px-4 py-2 text-16"
              key={tag + i}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>

      <div
        className="absolute right-8 top-8 rounded-5 bg-sky-500 p-2 transition-all"
        style={{
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <ArrowUpRight className="h-12 w-12 text-zinc-100" />
      </div>
    </article>
  )
}
export default ProjectCard
