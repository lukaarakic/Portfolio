import { useLocation } from 'react-router-dom'
import Arrow from '../assets/arrow-right-up.svg?react'
import ProjectInfo from '../components/ProjectInfo'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { client, urlFor } from '../utils/sanity'
import { Project } from '../typing'

export default function ProjectPage() {
  const location = useLocation()
  const pathname = location.pathname.split('/')[2]
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    async function fetchProject() {
      const project = await client.fetch(
        `*[_type == "Project" && slug.current == "${pathname}"][0]`,
      )

      if (!project) {
        throw new Response('Not Found', {
          status: 404,
          statusText: 'Project not found',
        })
      }

      setProject(project)
    }

    fetchProject()
  }, [pathname])

  useEffect(() => {
    gsap.to('#project-heading', {
      opacity: 1,
      duration: 1.5,
      ease: 'expo.out',
      delay: 0.6,
    })

    gsap.to('.info-item', {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.1,
      delay: 1,
    })

    gsap.to('#project-images', {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'expo.out',
      delay: 1.5,
    })
  }, [project])

  return (
    <div className="min-h-screen">
      {project && (
        <>
          <section>
            <h1
              className="mb-16 mt-80 text-64 font-bold text-zinc-100 opacity-0"
              id="project-heading"
            >
              {project.title}
            </h1>

            <ul className="mb-24 grid grid-cols-1 items-start justify-between gap-8 xs:grid-cols-3 md:flex">
              <li className="info-item translate-y-full opacity-0">
                <h3 className="mb-1 text-24 font-bold text-zinc-100">Role</h3>
                <p className="max-w-[35rem] text-20 font-medium">
                  {project.role}
                </p>
              </li>
              <li className="info-item translate-y-full opacity-0">
                <h3 className="mb-1 text-24 font-bold text-zinc-100">
                  Platforms
                </h3>
                <p className="max-w-[35rem] text-20 font-medium">
                  {project.platform}
                </p>
              </li>
              <li className="info-item translate-y-full opacity-0">
                <h3 className="mb-1 text-24 font-bold text-zinc-100">
                  Assignment
                </h3>
                <p className="max-w-[35rem] text-20 font-medium">
                  {project.assignment}
                </p>
              </li>
              <li className="info-item translate-y-full opacity-0">
                <h3 className="mb-1 text-24 font-bold text-zinc-100">
                  Objective
                </h3>
                <p className="max-w-[35rem] text-20 font-medium">
                  {project.objective}
                </p>
              </li>
              <li className="info-item translate-y-full opacity-0">
                <h3 className="mb-1 text-24 font-bold text-zinc-100">
                  Technologies
                </h3>
                <p className="max-w-[35rem] text-20 font-medium">
                  {project.technologies}
                </p>
              </li>
            </ul>
          </section>

          <section
            className="mb-20 translate-y-full opacity-0"
            id="project-images"
          >
            <Masonry
              breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
              className="flex w-full gap-6"
              columnClassName="space-y-6"
            >
              {project.projectImages?.map((img) => (
                <div
                  key={img._key}
                  className="overflow-hidden rounded-xl shadow-md transition-transform hover:scale-[1.02]"
                >
                  {img.asset && (
                    <img
                      src={urlFor(img.asset).url()}
                      alt={img.caption || 'Project screenshot'}
                      className="h-auto w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </Masonry>
          </section>

          <ProjectInfo
            execution={project.execution}
            overview={project.projectOverview}
          />

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-12 right-12 flex h-32 w-32 overflow-hidden rounded-full bg-zinc-300 p-2 transition-all hover:p-1"
          >
            <Arrow className="text-zinc-900" />
          </a>
        </>
      )}
    </div>
  )
}
