import ProjectCard from '../components/ProjectCard'
import { useAllPrismicDocumentsByType } from '@prismicio/react'

const WorkPage = () => {
  const [document] = useAllPrismicDocumentsByType('project')

  return (
    <>
      <h1 className="mb-32 mt-80 text-64 leading-none">
        Check out my <span className="text-zinc-100">recent projects</span>
      </h1>

      <section className="mb-80 grid grid-cols-1 gap-12 md:grid-cols-2">
        {document?.map((project) => (
          <ProjectCard
            imageUrl={project.data.mockup.url}
            to={project.slugs[0]}
            className={`interactable`}
            alt={project.data.mockup.alt}
          />
        ))}
      </section>
    </>
  )
}
export default WorkPage
