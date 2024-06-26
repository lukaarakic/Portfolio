interface CompetitionBarProps {
  imageUrl: string
  name: string
  place: string
  linkTo: string
}

const CompetitionBar = ({
  imageUrl,
  name,
  linkTo,
  place,
}: CompetitionBarProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-3xl bg-zinc-800 px-10 py-6 text-zinc-100 lg:px-12">
      <div className="flex items-center justify-center gap-6">
        <img src={imageUrl} alt="Logo of competiton" className="w-24 lg:w-28" />
        <div>
          <h3 className="mb-2 text-20 font-bold">{name}</h3>
          <span className="text-16 ">{place}</span>
        </div>
      </div>
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-nowrap text-18 underline hover:no-underline"
      >
        Read more
      </a>
    </div>
  )
}
export default CompetitionBar
