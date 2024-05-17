import ProjectCard from '../components/ProjectCard'
import Card from '../components/card-module/Card'
import CardList from '../components/card-module/CardList'

import Shape from '../assets/shape.svg?react'
import Layout from '../assets/layout-2.svg?react'
import Code from '../assets/code.svg?react'
import { useAllPrismicDocumentsByType } from '@prismicio/react'

export default function Index() {
  const [document] = useAllPrismicDocumentsByType('project', {
    limit: 3,
  })

  return (
    <>
      <section className="flex h-screen flex-col items-start justify-end gap-5 pb-20">
        <div className="fake-button gap-4 text-18 text-zinc-100">
          <div className="h-3 w-3 rounded-full bg-lime-500"></div>
          Available for work
        </div>

        <h2 className="w-[125rem] text-64 font-medium tracking-tight">
          I’m Luka - a <span className="text-zinc-100">web developer</span> from
          Serbia, focusing on building functional websites that will{' '}
          <span className="text-zinc-100">increase conversion</span> and{' '}
          <span className="text-zinc-100">reach customers</span>
        </h2>
      </section>
      <section className="project-section mt-60">
        <h3 className="text-40 font-medium">
          Latest <span className="text-zinc-100">Projects</span>
        </h3>

        <div className="grid-cols-home-grid mt-20 grid gap-12">
          {document?.map((project, i) => (
            <ProjectCard
              imageUrl={project.data.mockup.url}
              to={project.slugs[0]}
              className={`interactable ${i == 2 ? 'col-span-full h-[84rem]' : ''}`}
              alt={project.data.mockup.alt}
            />
          ))}
        </div>
      </section>

      <section className="my-40 flex">
        <h3 className="mr-52 w-[44rem] text-40 font-medium">
          What can I do to{' '}
          <span className="text-zinc-100">efficiently support</span> you and
          your business?
        </h3>

        <CardList className="gap-14">
          <Card
            title="UI Desgin"
            icon={<Layout />}
            description={`To effectively support your business with UI design, I create user-centric, brand-consistent designs that increase engagement and provide a seamless, modern experience.`}
          />

          <Card
            title="Interactive Animation"
            icon={<Shape className="interactive-anim" />}
            description={`I can make unique, interesting animations that fit nicely with your brand's aesthetic, increase engagement with your users, and help you reach your business objectives.`}
          />
          <Card
            title="Development"
            icon={<Code />}
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tempor tortor lorem, et vulputate orci lacinia sit amet. Donec at
          euismod erat.`}
          />
        </CardList>
      </section>
    </>
  )
}
