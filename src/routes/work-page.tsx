import ProjectCard from '../components/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import { client, urlFor } from '../utils/sanity'
import { Project } from '../typing'

const WorkPage = () => {
  const [projects, setProjects] = useState<Project[] | null>(null)

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

  useEffect(() => {
    async function fetchProjects() {
      const projects = await client.fetch(`*[_type == "Project"]`)

      if (!projects) {
        throw new Response('Not Found', {
          status: 404,
          statusText: 'Project not found',
        })
      }

      setProjects(projects)
    }

    fetchProjects()
  }, [])

  return (
    <>
      <h1 className="mb-32 mt-80 text-64 leading-none" id="work-heading">
        Check out my <span className="text-zinc-100">recent projects</span>
      </h1>

      <section
        className="mb-80 grid min-h-screen grid-cols-1 gap-12 md:grid-cols-2"
        id="work-projects"
      >
        {projects?.map((project) => (
          <ProjectCard
            key={project._id}
            imageUrl={
              project.mockup?.asset ? urlFor(project.mockup.asset).url() : ''
            }
            to={project.slug?.current || ''}
            className="interactable w-full overflow-hidden"
            alt={'Project mockup'}
            name={project.title ?? ''}
            role={project.role ?? ''}
          />
        ))}
      </section>
    </>
  )
}
export default WorkPage
