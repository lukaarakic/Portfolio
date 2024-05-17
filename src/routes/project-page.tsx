import { useLocation } from 'react-router-dom'
import { usePrismicDocumentByUID } from '@prismicio/react'
import Arrow from '../assets/arrow-right-up.svg?react'
import ProjectInfo from '../components/ProjectInfo'

const ProjectPage = () => {
  const location = useLocation()
  const pathname = location.pathname.split('/')[2]

  const [document] = usePrismicDocumentByUID('project', pathname)

  if (!document) {
    return <div className="h-screen w-full"></div>
  }

  return (
    <>
      <section>
        <h1 className="mb-16 mt-80 text-64 font-bold text-zinc-100">
          {document.data.name}
        </h1>
        <ul className="mb-24 flex items-start justify-between">
          <li>
            <h3 className="mb-1 text-24 font-bold text-zinc-100">Role</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              {document.data.role}
            </p>
          </li>
          <li>
            <h3 className="mb-1 text-24 font-bold text-zinc-100">Platforms</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              {document.data.platform}
            </p>
          </li>
          <li>
            <h3 className="mb-1 text-24 font-bold text-zinc-100">Assignment</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              {document.data.assignment}
            </p>
          </li>
          <li>
            <h3 className="mb-1 text-24 font-bold text-zinc-100">Objective</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              {document.data.objective}
            </p>
          </li>
          <li>
            <h3 className="mb-1 text-24 font-bold text-zinc-100">
              Tehnologies
            </h3>
            <p className="max-w-[35rem] text-20 font-medium">
              {document.data.tehnologies}
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-20">
        <img
          src={document.data.project_images[0].image.url}
          alt=""
          className="mb-8 w-full rounded-40"
        />

        <div className="mb-8 grid w-full grid-cols-project-45/55 gap-8">
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

        <div className="grid w-full grid-cols-project-55/45 gap-8">
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
        className="fixed bottom-12 right-12 flex h-24 w-24 overflow-hidden rounded-full bg-zinc-300 p-2 transition-all hover:p-1"
      >
        <Arrow className="text-zinc-900" />
      </a>
    </>
  )
}
export default ProjectPage
