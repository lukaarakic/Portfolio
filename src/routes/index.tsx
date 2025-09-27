import { useEffect, useState, useRef } from 'react'
import { Project } from '../typing'
import { client, urlFor } from '../utils/sanity'
import Badge from '../components/Badge'
import Noise from '../assets/noise.png'
import ArrowDown from '../assets/arrow-down.svg?react'
import ProjectCard from '../components/ProjectCard'
import BubbleButton from '../components/BubbleButton'
import MyPhoto from '../assets/myphoto.webp'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedLink from '../components/AnimatedLink'

gsap.registerPlugin(ScrollTrigger)

export default function Index() {
  const [projects, setProjects] = useState<Project[] | null>(null)
  const photoRef = useRef<HTMLImageElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)
  const capabilityRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRefs = useRef<(HTMLDivElement | null)[]>([])

  const setCapabilityRef = (index: number) => (el: HTMLDivElement | null) => {
    capabilityRefs.current[index] = el
  }

  const setLineRef = (index: number) => (el: HTMLDivElement | null) => {
    lineRefs.current[index] = el
  }

  useEffect(() => {
    async function fetchProjects() {
      try {
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
      } catch (error) {
        console.error('Error fetching projects:', error)
      }
    }

    const setupPhotoAnimation = () => {
      const photoElement = photoRef.current

      if (photoElement) {
        gsap.set(photoElement, {
          height: '0rem',
        })

        gsap.to(photoElement, {
          height: '46rem',
          ease: 'none',
          scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1.2,
          },
        })
      }
    }

    const setupCapabilityAnimations = () => {
      capabilityRefs.current.forEach((element) => {
        if (element) {
          gsap.set(element, {
            x: 50,
            y: 50,
            opacity: 0,
          })

          gsap.to(element, {
            x: 0,
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'top 45%',
              scrub: 2,
              toggleActions: 'play none none reverse',
            },
          })
        }
      })

      lineRefs.current.forEach((line) => {
        if (line) {
          gsap.set(line, {
            scaleY: 0,
            transformOrigin: 'bottom center',
          })

          gsap.to(line, {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '#last-section',
              start: 'top 80%',
              end: 'top 40%',
              scrub: 2,
            },
          })
        }
      })
    }

    const setupArrowAnimation = () => {
      const arrowElement = arrowRef.current

      if (arrowElement) {
        gsap
          .timeline({ repeat: -1 })
          .set(arrowElement, { y: -20, opacity: 0 })
          .to(arrowElement, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out',
          })
          .to({}, { duration: 1.5 })
          .to(arrowElement, {
            y: 20,
            opacity: 0,
            duration: 1.2,
            ease: 'power2.in',
          })
          .set(arrowElement, { y: -20 })
      }
    }

    fetchProjects()

    setTimeout(() => {
      setupPhotoAnimation()
      setupCapabilityAnimations()
      setupArrowAnimation()
    }, 100)
  }, [])

  return (
    <>
      <main className="relative z-10">
        <div className="animate-fadeIn">
          <img
            src={Noise}
            alt=""
            className="absolute inset-0 -z-10 h-screen w-screen opacity-30"
          />
          <section className="hero-gradient relative flex h-svh items-center justify-items-center overflow-hidden px-20 pt-[20rem]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[74rem] w-[74rem] rounded-full border border-slate-100"></div>

              <div className="animate-echo-1 absolute inset-0 h-[74rem] w-[74rem] rounded-full border border-slate-100/60"></div>
              <div className="animate-echo-2 absolute inset-0 h-[74rem] w-[74rem] rounded-full border border-slate-100/40"></div>
              <div className="animate-echo-3 absolute inset-0 h-[74rem] w-[74rem] rounded-full border border-slate-100/20"></div>
            </div>
            <h1 className="-mt-[20rem] text-[16.5vw] font-bold uppercase leading-[69%] text-zinc-100">
              <span className="mb-16 inline-block">Luka</span>
              <div className="start flex shrink-0 flex-col-reverse items-end gap-8 md:flex-row">
                <Badge>Available now</Badge>
                <div className="ml-[15vw] md:ml-[20vw] lg:ml-[25vw]">Rakić</div>
              </div>
            </h1>

            <div className="absolute bottom-20 left-20 flex items-center gap-4 text-zinc-500">
              <div ref={arrowRef} className="aspect-square w-10">
                <ArrowDown className="aspect-square w-10" />
              </div>
              <span className="whitespace-nowrap break-keep text-20 font-medium text-zinc-100">
                Scroll to projects
              </span>
            </div>
          </section>

          <section className="mb-20 flex flex-col-reverse px-20 lg:grid lg:grid-cols-2">
            <div className="lg:w-[80%]">
              {projects?.map((project, index) => (
                <ProjectCard
                  tags={project.tags ?? []}
                  index={index}
                  key={project._id}
                  imageUrl={
                    project.mockup?.asset
                      ? urlFor(project.mockup.asset).url()
                      : ''
                  }
                  to={project.slug?.current || ''}
                  name={project.title ?? ''}
                  className="mb-40"
                />
              ))}
            </div>
            <div className="mb-64">
              <div className="sticky top-20">
                <h2 className="mb-10 text-9xl font-semibold uppercase">
                  Projects
                </h2>

                <BubbleButton to="/projects">See all projects</BubbleButton>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="sticky top-0 min-h-svh bg-slate-100 px-20 text-zinc-950"
          >
            <div className="flex shrink-0 flex-col gap-40 pt-40 lg:gap-60">
              <h2 className="text-40 font-medium lg:w-[70%] lg:text-64">
                Luka here! I{' '}
                <span className="highlight">design and develop</span> custom
                Webflow sites that are not only{' '}
                <span className="highlight">beautiful</span> but built to drive{' '}
                <span className="highlight">growth</span> for your business.
              </h2>

              <div className="ml-auto flex flex-col items-start gap-20 lg:mr-[7%] lg:flex-row lg:gap-40">
                <p className="text-24 font-medium lg:max-w-[44rem]">
                  Many websites look good but fail to deliver results.
                  <br />
                  <br />I design and build Webflow websites that combine unique
                  design, adaptability, and modern animations, so your site
                  doesn’t just look great, it works hard to grow your business.
                </p>
                <img
                  ref={photoRef}
                  src={MyPhoto}
                  alt="Selfie of Luka Rakić"
                  className="w-full object-cover lg:w-[40rem]"
                />
              </div>
            </div>
          </section>
          <div className="h-[60rem] lg:h-[40rem]" aria-hidden />

          <section
            id="last-section"
            className="sticky top-0 z-30 min-h-svh bg-zinc-950 px-20 py-40"
          >
            <Badge>Capabilities</Badge>
            <h2 className="mb-20 mt-12 w-full text-40 font-medium lg:max-w-[50%]">
              Most businesses
              <span className="text-zinc-500"> struggle to keep up</span> with
              the rapid changes in web design. I stay on top of the{' '}
              <span className="text-zinc-500">latest tools</span> and
              technologies, creating websites that not only look great but run{' '}
              <span className="text-zinc-500">flawlessly</span> for your users.
            </h2>
            <AnimatedLink
              href="mailto:hello@lukarakic.me"
              className="mb-40 inline-block text-30 font-medium"
              variant="blue-to-white"
            >
              Get in touch :)
            </AnimatedLink>

            <div className="relative">
              <div className="absolute inset-0 hidden lg:grid lg:grid-cols-3">
                <div
                  ref={setLineRef(0)}
                  className="border-r border-dashed border-slate-100/25"
                ></div>
                <div
                  ref={setLineRef(1)}
                  className="border-r border-dashed border-slate-100/25"
                ></div>
                <div></div>
              </div>

              <div className="relative grid grid-cols-1 border-dashed border-slate-100/25 pb-[50rem] lg:grid-cols-3 lg:border-b">
                <div className="px-8 pb-40 lg:pb-[51rem]">
                  <div
                    ref={setCapabilityRef(0)}
                    className="flex items-start gap-6"
                  >
                    <span className="text-18 font-medium text-zinc-500">
                      01.
                    </span>
                    <span className="text-30 font-medium text-zinc-100">
                      Webflow
                    </span>
                  </div>
                </div>
                <div className="px-8 pb-40 lg:pb-[50rem]">
                  <div
                    ref={setCapabilityRef(1)}
                    className="flex items-start gap-6"
                  >
                    <span className="text-18 font-medium text-zinc-500">
                      02.
                    </span>
                    <span className="text-30 font-medium text-zinc-100">
                      Custom Code
                    </span>
                  </div>
                </div>
                <div className="px-8 lg:pb-[50rem]">
                  <div
                    ref={setCapabilityRef(2)}
                    className="flex items-start gap-6"
                  >
                    <span className="text-18 font-medium text-zinc-500">
                      03.
                    </span>
                    <span className="text-30 font-medium text-zinc-100">
                      UI/UX Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
