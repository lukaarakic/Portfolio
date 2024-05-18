import ButtonLink from './ButtonLink'
import ExternalLink from '../assets/external-link.svg?react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ProjectCardProps {
  className?: string
  alt?: string
  imageUrl: string
  to: string
  name: string
  role: string
}

const ProjectCard = ({
  className,
  imageUrl,
  alt,
  to,
  name,
  role,
}: ProjectCardProps) => {
  const [opacity, setOpacity] = useState(0)
  const navigate = useNavigate()

  function onEnter() {
    setOpacity(1)
  }

  function onLeave() {
    setOpacity(0)
  }

  function onClick() {
    navigate(`/project/${to}`)
  }

  return (
    <article
      className={`${className} relative flex cursor-pointer`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="w-full rounded-40 object-cover"
      />

      <div
        className="absolute bottom-12 left-1/2 mx-auto flex w-[93%] -translate-x-1/2 items-center 
      justify-between rounded-full bg-zinc-900 bg-opacity-80 px-20 py-8 text-zinc-100 backdrop-blur-xl transition-opacity duration-500 ease-out"
        style={{
          opacity,
        }}
      >
        <div>
          <h4 className="text-24 font-medium">{name}</h4>
          <span className="text-16 text-zinc-500">{role}</span>
        </div>

        <ButtonLink to="/" className="cursor-none">
          Learn More
          <ExternalLink className="w-12" />
        </ButtonLink>
      </div>
    </article>
  )
}
export default ProjectCard
