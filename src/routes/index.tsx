import ProjectCard from '../components/ProjectCard'
import Card from '../components/card-module/Card'
import CardList from '../components/card-module/CardList'

import Shape from '../assets/shape.svg?react'
import Layout from '../assets/layout-2.svg?react'
import Code from '../assets/code.svg?react'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import AnimatedElement from '../components/AnimatedElement'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Index() {
  const [document] = useAllPrismicDocumentsByType('project', {
    limit: 3,
  })

  useGSAP(() => {
    gsap.fromTo(
      '.available-work',
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1.5,
        duration: 1.5,
        ease: 'expo.out',
      },
    )
  })

  return (
    <>
      <section className="mb-60 flex h-svh flex-col items-start justify-end gap-5 pb-20">
        <div className="available-work fake-button gap-4 text-18 text-zinc-100">
          <div className="h-3 w-3 rounded-full bg-lime-500"></div>
          Available for work
        </div>

        <AnimatedElement
          className="max-w-[125rem] text-40 font-medium tracking-tight md:text-64"
          text="I’m Luka - a web developer from Serbia, focusing on building functional websites that will increase conversion and reach customers."
          id="hero-heading"
          Wrapper="h2"
          delay={1.5}
        />
      </section>

      <section className="project-section">
        <h3 className="text-40 font-medium">
          Latest <span className="text-zinc-100">Projects</span>
        </h3>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-home-grid">
          {document?.map((project, i) => (
            <ProjectCard
              key={project.data.name}
              imageUrl={project.data.mockup.url}
              to={project.slugs[0]}
              className={`interactable h-[40rem] md:h-auto ${i == 2 ? 'col-span-full md:!h-[84rem]' : ''}`}
              alt={project.data.mockup.alt}
              name={project.data.name}
              role={project.data.role}
            />
          ))}
        </div>
      </section>

      <section className="my-40 flex flex-col">
        <h3 className="mb-12 mr-52 w-[44rem] text-40 font-medium">
          What can I do to{' '}
          <span className="text-zinc-100">efficiently support</span> you and
          your business?
        </h3>

        <CardList className="flex-col gap-14 xs:grid xs:grid-cols-2 lg:flex lg:flex-row">
          <Card
            title="UI Design"
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
            description={`Align development projects with company goals, prioritize operations, improve communication, automate procedures, and constantly refresh skills for improved efficiency and growth.`}
          />
        </CardList>
      </section>
    </>
  )
}
