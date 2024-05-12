import Card from './Card'

const CardList = () => {
  return (
    <div className="flex items-center justify-between gap-14 w-[70%]">
      <Card
        title="UI Desgin"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tempor tortor lorem, et vulputate orci lacinia sit amet. Donec at
          euismod erat.`}
      />

      <Card
        title="Interactive Animation"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tempor tortor lorem, et vulputate orci lacinia sit amet. Donec at
          euismod erat.`}
      />
      <Card
        title="Development"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tempor tortor lorem, et vulputate orci lacinia sit amet. Donec at
          euismod erat.`}
      />
    </div>
  )
}
export default CardList
