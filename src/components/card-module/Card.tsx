interface CardProps {
  title: string
  description: string
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="rounded-background p-10">
      <div className="bg-zinc-300 w-20 h-20 rounded-xl mb-4"></div>
      <span className="font-bold text-zinc-100 text-18 mb-2 inline-block">
        {title}
      </span>
      <p className="font-medium text-18">{description}</p>
    </div>
  )
}
export default Card
