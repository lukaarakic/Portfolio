import { ReactNode } from 'react'

interface CardProps {
  title: string
  description: string
  icon?: ReactNode
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="card rounded-background rounded-[2.3rem] p-10">
      <div className="mb-6 h-20 w-20 rounded-xl bg-zinc-300 p-3 text-zinc-800">
        {icon}
      </div>
      <span className="mb-2 inline-block text-18 font-bold text-zinc-100">
        {title}
      </span>
      <p className="text-16 leading-snug tracking-wide">{description}</p>
    </div>
  )
}
export default Card
