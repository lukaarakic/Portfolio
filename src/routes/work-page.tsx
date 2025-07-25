import ProjectCard from '../components/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useState, useRef } from 'react'
import { client, urlFor } from '../utils/sanity'
import { Project } from '../typing'

const filterToCategory = {
  Webflow: 'webflow',
  'Custom Code': 'custom-code',
} as const

const WorkPage = () => {
  const [projects, setProjects] = useState<Project[] | null>(null)
  const [allProjects, setAllProjects] = useState<Project[] | null>(null)
  const [activeFilter, setActiveFilter] = useState<
    'All' | 'Webflow' | 'Custom Code'
  >('All')
  const isFirstRender = useRef(true)

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

      setAllProjects(projects)
      setProjects(projects)
    }

    fetchProjects()
  }, [])

  useEffect(() => {
    if (!allProjects) return

    if (isFirstRender.current) {
      isFirstRender.current = false
      gsap.fromTo(
        '#work-projects',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3,
        },
      )
      return
    }

    gsap.to('#work-projects', {
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: 'power2.out',
      onComplete: () => {
        if (activeFilter === 'All') {
          setProjects(allProjects)
        } else {
          const categoryValue =
            filterToCategory[activeFilter as keyof typeof filterToCategory]
          const filtered = allProjects.filter(
            (project) => project.category === categoryValue,
          )
          setProjects(filtered)
        }

        gsap.fromTo(
          '#work-projects',
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            delay: 0.1,
          },
        )
      },
    })
  }, [activeFilter, allProjects])

  const handleFilterChange = (filter: 'All' | 'Webflow' | 'Custom Code') => {
    if (filter === activeFilter) return

    const clickedButton = document.querySelector(`[data-filter="${filter}"]`)
    if (clickedButton) {
      gsap.fromTo(
        clickedButton,
        {
          scale: 1,
        },
        {
          scale: 0.95,
          duration: 0.1,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
        },
      )
    }

    setActiveFilter(filter)
  }

  return (
    <>
      <h1 className="mb-16 mt-80 text-64 leading-none" id="work-heading">
        Check out my <span className="text-zinc-100">recent projects</span>
      </h1>

      <div className="mb-32 flex items-center gap-4" id="work-filters">
        <p className="text-20 font-semibold text-zinc-500 ">Filters: </p>
        {(['All', 'Webflow', 'Custom Code'] as const).map((filter) => (
          <button
            key={filter}
            data-filter={filter}
            onClick={() => handleFilterChange(filter)}
            className={`rounded-full border border-zinc-500 px-8 py-4 text-14 font-medium transition-all duration-300 ${
              activeFilter === filter
                ? 'bg-zinc-500/30 text-white'
                : 'bg-transparent text-white hover:bg-zinc-500/30'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <section
        className="mb-80 grid min-h-screen grid-cols-1 gap-12 opacity-0 md:grid-cols-2"
        id="work-projects"
      >
        {projects?.map((project) => (
          <ProjectCard
            key={project._id}
            imageUrl={
              project.mockup?.asset ? urlFor(project.mockup.asset).url() : ''
            }
            to={project.slug?.current || ''}
            className="interactable max-h-[70rem] w-full overflow-hidden"
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
