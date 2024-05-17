import StickySection from './StickySection'
import ReactMarkdown from 'react-markdown'

interface ProjectInfoProps {
  overview: string
  execution: string
}

const ProjectInfo = ({ execution, overview }: ProjectInfoProps) => {
  return (
    <>
      {overview ? (
        <StickySection
          className="markdown"
          title={
            <h2 className="sticky top-44 text-40 text-zinc-500 ">
              Project <span className=" text-zinc-100">Overview</span>
            </h2>
          }
          content={
            <ReactMarkdown className="max-w-[97rem]">{overview}</ReactMarkdown>
          }
        />
      ) : (
        ''
      )}

      {execution ? (
        <StickySection
          className="markdown border-t border-zinc-500"
          title={
            <h2 className="sticky top-44 text-40 text-zinc-100">Execution</h2>
          }
          content={
            <ReactMarkdown className="mb-12 max-w-[97rem]">
              {execution}
            </ReactMarkdown>
          }
        />
      ) : (
        ''
      )}
    </>
  )
}
export default ProjectInfo
