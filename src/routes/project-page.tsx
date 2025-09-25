import { useLocation } from 'react-router-dom'
import Arrow from '../assets/arrow-right-up.svg?react'
import ProjectInfo from '../components/ProjectInfo'
import ImageSlider from '../components/ImageSlider'
import gsap from 'gsap'
import { useEffect, useState } from 'react'
import { client, urlFor } from '../utils/sanity'
import { Project } from '../typing'

export default function ProjectPage() {
  const location = useLocation()
  const pathname = location.pathname.split('/')[2]
  const [project, setProject] = useState<Project | null>(null)
  const [isSliderOpen, setIsSliderOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openSlider = (index: number) => {
    setSelectedImageIndex(index)
    setIsSliderOpen(true)
  }

  const closeSlider = () => {
    setIsSliderOpen(false)
  }

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
    <div className="min-h-screen px-20">
      {project && (
        <>
          <section>
            <h1
              className="mb-16 mt-80 text-64 font-medium text-zinc-100 opacity-0"
              id="project-heading"
            >
              {project.title}
            </h1>

            <ul className="mb-24 grid grid-cols-1 items-start justify-between gap-8 xs:grid-cols-3 md:flex">
              {/* <li className="info-item translate-y-full opacity-0">
                <h3 className="mb-1 text-24 font-medium text-zinc-100">Role</h3>
                <p className="max-w-[35rem] text-16">{project.role}</p>
              </li> */}
              <li className="info-item translate-y-full opacity-0">
                <h3 className="mb-1 text-24 font-medium text-zinc-100">
                  Platforms
                </h3>
                <p className="max-w-[35rem] text-16">{project.platform}</p>
              </li>
              <li className="info-item translate-y-full opacity-0">
                <h3 className="mb-1 text-24 font-medium text-zinc-100">
                  Assignment
                </h3>
                <p className="max-w-[35rem] text-16">{project.assignment}</p>
              </li>
              <li className="info-item translate-y-full opacity-0">
                <h3 className="mb-1 text-24 font-medium text-zinc-100">
                  Objective
                </h3>
                <p className="max-w-[35rem] text-16">{project.objective}</p>
              </li>
              <li className="info-item translate-y-full opacity-0">
                <h3 className="mb-1 text-24 font-medium text-zinc-100">
                  Technologies
                </h3>
                <p className="max-w-[35rem] text-16 ">{project.technologies}</p>
              </li>
            </ul>
          </section>

          <section
            className="mb-20 min-h-[50vh] translate-y-full opacity-0"
            id="project-images"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.projectImages?.map((img, index) => (
                <div
                  key={img._key}
                  className="group cursor-pointer overflow-hidden rounded-5 shadow-md transition-transform hover:scale-[1.02]"
                  onClick={() => openSlider(index)}
                >
                  {img.asset && (
                    <div className="relative">
                      <img
                        src={urlFor(img.asset).url()}
                        alt={img.caption || 'Project screenshot'}
                        className="h-auto w-full object-cover transition-opacity group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all group-hover:bg-opacity-20">
                        <div className="rounded-full bg-white bg-opacity-0 p-3 text-white opacity-0 transition-all group-hover:bg-opacity-80 group-hover:opacity-100">
                          <svg
                            className="h-6 w-6 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
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

          {/* Image Slider Modal */}
          {project.projectImages && (
            <ImageSlider
              images={project.projectImages}
              initialIndex={selectedImageIndex}
              isOpen={isSliderOpen}
              onClose={closeSlider}
            />
          )}
        </>
      )}
    </div>
  )
}
