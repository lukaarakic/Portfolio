import Card from './Card'

import Shape from '../../assets/shape.svg?react'
import Layout from '../../assets/layout-2.svg?react'
import Code from '../../assets/code.svg?react'

const CardList = () => {
  return (
    <div className="flex w-[70%] items-center justify-between gap-14">
      <Card
        title="UI Desgin"
        icon={<Layout />}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tempor tortor lorem, et vulputate orci lacinia sit amet. Donec at
          euismod erat.`}
      />

      <Card
        title="Interactive Animation"
        icon={<Shape className="interactive-anim" />}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tempor tortor lorem, et vulputate orci lacinia sit amet. Donec at
          euismod erat.`}
      />
      <Card
        title="Development"
        icon={<Code />}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tempor tortor lorem, et vulputate orci lacinia sit amet. Donec at
          euismod erat.`}
      />
    </div>
  )
}
export default CardList
