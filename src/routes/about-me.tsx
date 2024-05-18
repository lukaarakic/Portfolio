import ContactButton from '../components/ContactButton'
import Card from '../components/card-module/Card'
import CardList from '../components/card-module/CardList'
import StickySection from '../components/StickySection'
import CompetitionBar from '../components/about-me/ConmpetitionBar'

import Profile from '../assets/about-me/profile.png'
import Speak from '../assets/about-me/speak.svg?react'
import Code from '../assets/code.svg?react'
import Layout from '../assets/layout.svg?react'
import ETF from '../assets/about-me/ete.png'
import RAF from '../assets/about-me/raf.png'
import SWW from '../assets/about-me/sww.png'

const AboutMe = () => {
  return (
    <>
      <section className="mb-40 mt-80 flex flex-col items-start lg:flex-row">
        <h1 className="mb-8 flex shrink-0 flex-wrap items-center text-64 lg:mb-0 lg:max-w-[65rem]">
          <img src={Profile} alt="" className="mr-4 inline-block w-24" /> Hello,
          <span className="text-zinc-100">I'm Luka,</span>
          <span className="text-zinc-100">Web Developer</span>
        </h1>

        <div className="lg:pr-52">
          <h2 className="mb-4 text-30 font-semibold text-zinc-200 lg:text-40">
            With experience in a coding and design, I combine both fields to
            understand the needs of brands and create websites that bring them
            profit.
          </h2>
          <p className="mb-12 text-24 ">
            Over the course of two years, I have been creating and developing.
            There is a wide spectrum of technologies i use, from custom code to
            no code.
          </p>
          <ContactButton />
        </div>
      </section>

      <section className="mb-32">
        <h2 className="mb-12 text-40 font-bold">
          How my <span className="text-zinc-100">service process</span> looks
          like
        </h2>

        <CardList className="flex-col gap-12 xs:grid xs:grid-cols-2 lg:flex lg:flex-row">
          <Card
            title="Consulting"
            description="The first stage involves a conversation with the client to learn about his needs, goals, and vision. During this phase, we analyze the brand's qualities, target group, competitors, values, and project purpose."
            icon={<Speak />}
            className="max-w-[55rem]"
          />

          <Card
            title="Designing"
            description="I begin by creating the homepage design. This template is important since it establishes the overall design style for the entire website. I get to work on creating templates for the remaining subpages as soon as the project is accepted."
            icon={<Layout />}
            className="max-w-[55rem]"
          />

          <Card
            title="Developing"
            description="The website's implementation is the final step. This requires experience, which is why I support the client throughout the entire process, from start to finish."
            icon={<Code />}
            className="max-w-[55rem]"
          />
        </CardList>
      </section>

      <StickySection
        title={
          <h2 className="sticky top-44 mb-16 text-40 font-bold">
            My <span className="text-zinc-100">Accomplishments</span>
          </h2>
        }
        content={
          <div className="flex flex-col gap-8">
            <CompetitionBar
              imageUrl={ETF}
              linkTo="https://www.netokracija.rs/galaksija-kup-2024-216999"
              name="National competition “Galaksija Kup 2024”"
              place="First place"
            />

            <CompetitionBar
              imageUrl={RAF}
              linkTo="https://raf.edu.rs/vesti/2024/odrzano-finale-takmicenja-raf-challenge-2024/"
              name="National competition “RAF CHALLENGE 2024”"
              place="First place in second category (Application)"
            />

            <CompetitionBar
              imageUrl={SWW}
              linkTo="https://www.elfak.ni.ac.rs/informacije/novosti-i-obavestenja/odrzano-takmicenje-the-smart-world-wins-competition"
              name="International competition “Smart World Wins 2023”"
              place="First place"
            />

            <CompetitionBar
              imageUrl={ETF}
              linkTo="https://www.aa.com.tr/ba/nauka-i-tehnologija/rukavica-za-prevo%C4%91enje-znakovnog-jezika-u-govor-izum-ni%C5%A1kih-srednjo%C5%A1kolaca/2885116"
              name="National competition “Galaksija Kup 2023”"
              place="Second place"
            />
          </div>
        }
      />
    </>
  )
}
export default AboutMe
