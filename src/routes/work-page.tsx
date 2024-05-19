import ProjectCard from '../components/ProjectCard'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const WorkPage = () => {
  const [document] = useAllPrismicDocumentsByType('project')

  useGSAP(() => {
    gsap.fromTo(
      '#work-heading',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'expo.out',
        delay: 0.6,
      },
    )

    gsap.fromTo(
      '#work-projects',
      {
        opacity: 0,
        y: '100%',
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'expo.out',
        delay: 0.8,
      },
    )
  })

  return (
    <>
      <h1 className="mb-32 mt-80 text-64 leading-none" id="work-heading">
        Check out my <span className="text-zinc-100">recent projects</span>
      </h1>

      <section
        className="mb-80 grid min-h-screen grid-cols-1 gap-12 md:grid-cols-2"
        id="work-projects"
      >
        {document?.map((project) => (
          <ProjectCard
            name={project.data.name}
            role={project.data.role}
            key={project.data.name}
            imageUrl={project.data.mockup.url}
            to={project.slugs[0]}
            className={`interactable h-auto lg:h-[70rem]`}
            alt={project.data.mockup.alt}
          />
        ))}
      </section>
    </>
  )
}
export default WorkPage
