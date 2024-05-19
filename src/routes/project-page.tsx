import { useLocation } from 'react-router-dom'
import { usePrismicDocumentByUID } from '@prismicio/react'
import Arrow from '../assets/arrow-right-up.svg?react'
import ProjectInfo from '../components/ProjectInfo'
import gsap from 'gsap'
import { useEffect } from 'react'

const ProjectPage = () => {
  const location = useLocation()
  const pathname = location.pathname.split('/')[2]

  const [document] = usePrismicDocumentByUID('project', pathname)

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
  }, [document])

  if (!document) return <div className="h-screen w-full"></div>

  return (
    <>
      <section>
        <h1
          className="mb-16 mt-80 text-64 font-bold text-zinc-100 opacity-0"
          id="project-heading"
        >
          {document.data.name}
        </h1>

        <ul className="mb-24 grid grid-cols-1 items-start justify-between gap-8 xs:grid-cols-3 md:flex">
          <li className="info-item translate-y-full opacity-0">
            <h3 className="mb-1 text-24 font-bold text-zinc-100">Role</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              {document.data.role}
            </p>
          </li>
          <li className="info-item translate-y-full opacity-0">
            <h3 className="mb-1 text-24 font-bold text-zinc-100">Platforms</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              {document.data.platform}
            </p>
          </li>
          <li className="info-item translate-y-full opacity-0">
            <h3 className="mb-1 text-24 font-bold text-zinc-100">Assignment</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              {document.data.assignment}
            </p>
          </li>
          <li className="info-item translate-y-full opacity-0">
            <h3 className="mb-1 text-24 font-bold text-zinc-100">Objective</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              {document.data.objective}
            </p>
          </li>
          <li className="info-item translate-y-full opacity-0">
            <h3 className="mb-1 text-24 font-bold text-zinc-100">
              Tehnologies
            </h3>
            <p className="max-w-[35rem] text-20 font-medium">
              {document.data.tehnologies}
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-20 translate-y-full opacity-0" id="project-images">
        <img
          src={document.data.project_images[0].image.url}
          alt=""
          className="mb-8 w-full rounded-40"
        />

        <div className="mb-8 grid w-full grid-cols-1 gap-8 lg:grid-cols-project-45/55">
          <img
            src={document.data.project_images[1].image.url}
            alt=""
            className="h-[50rem] w-full rounded-40 object-cover object-top"
          />
          <img
            src={document.data.project_images[2].image.url}
            alt=""
            className="h-[50rem] w-full rounded-40 object-cover object-top"
          />
        </div>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-project-55/45">
          <img
            src={document.data.project_images[3].image.url}
            alt=""
            className="h-[50rem] w-full rounded-40 object-cover object-top"
          />
          <img
            src={document.data.project_images[4].image.url}
            alt=""
            className="h-[50rem] w-full rounded-40 object-cover object-top"
          />
        </div>
      </section>

      <ProjectInfo
        execution={document.data.execution}
        overview={document.data.project_overview}
      />

      <a
        href={document.data.live_url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 flex h-32 w-32 overflow-hidden rounded-full bg-zinc-300 p-2 transition-all hover:p-1"
      >
        <Arrow className="text-zinc-900" />
      </a>
    </>
  )
}
export default ProjectPage
