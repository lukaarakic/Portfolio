import ProjectCard from '../components/ProjectCard'
import Card from '../components/card-module/Card'
import CardList from '../components/card-module/CardList'

import Shape from '../assets/shape.svg?react'
import Layout from '../assets/layout-2.svg?react'
import Code from '../assets/code.svg?react'
import AnimatedElement from '../components/AnimatedElement'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HomepageLogo from '../components/HomepageLogo'
import useWindowDimensions from '../utils/useWindowDimensions'
import { useEffect, useState } from 'react'
import { Project } from '../typing'
import { client, urlFor } from '../utils/sanity'

export default function Index() {
  const { width } = useWindowDimensions()

  const [projects, setProjects] = useState<Project[] | null>(null)

  useEffect(() => {
    async function fetchProjects() {
      const projects = await client.fetch(
        `*[_type == "Project"] | order(_createdAt desc)[0...3]`,
      )

      if (!projects) {
        throw new Response('Not Found', {
          status: 404,
          statusText: 'Project not found',
        })
      }

      setProjects(projects)
    }

    fetchProjects()
  }, [])

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
      <section className="mb-60 box-border flex h-dvh flex-col items-start justify-end gap-5 pb-20">
        {width > 580 ? <HomepageLogo /> : null}

        <div className="available-work fake-button gap-4 text-18 text-zinc-100">
          <div className="h-3 w-3 rounded-full bg-lime-500"></div>
          Available for work
        </div>

        <AnimatedElement
          className="intro-text max-w-[125rem] text-40 font-medium tracking-tight md:text-64"
          text="I’m Luka - a web developer from Serbia, focusing on building functional websites that will increase conversion and reach customers."
          id="hero-heading"
          Wrapper="h2"
          delay={1.5}
        />
      </section>

      <section className="project-section h-full">
        <h3 className="mb-8 text-40 font-medium">
          Latest <span className="text-zinc-100">Projects</span>
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {projects?.[0] && (
            <ProjectCard
              key={projects[0]._id}
              imageUrl={
                projects[0].mockup?.asset
                  ? urlFor(projects[0].mockup.asset).url()
                  : ''
              }
              to={projects[0].slug?.current || ''}
              alt={'Project mockup'}
              name={projects[0].title ?? ''}
              role={projects[0].role ?? ''}
              className="interactable col-span-1 md:col-span-7 2xl:max-h-[85.5rem]"
            />
          )}

          <div className="flex w-full flex-col gap-6 md:col-span-5 md:grid-cols-1">
            {projects?.slice(1, 3).map((project) => (
              <ProjectCard
                key={project._id}
                imageUrl={
                  project.mockup?.asset
                    ? urlFor(project.mockup.asset).url()
                    : ''
                }
                to={project.slug?.current || ''}
                className="interactable w-full overflow-hidden last-of-type:mt-auto 2xl:max-h-[42rem]"
                alt={'Project mockup'}
                name={project.title ?? ''}
                role={project.role ?? ''}
              />
            ))}
          </div>
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
