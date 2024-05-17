import { ReactNode } from 'react'

interface ProjectInfoProps {
  title: ReactNode
  content: ReactNode
  className?: string
}

const StickySection = ({ title, content, className }: ProjectInfoProps) => {
  return (
    <section
      className={`relative grid grid-cols-1 py-40 lg:grid-cols-project-25/75 ${className}`}
    >
      <div>{title}</div>

      {content}
    </section>
  )
}
export default StickySection
