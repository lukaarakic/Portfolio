import Sportlink from '../assets/Mockups/Sportlink.png'
import Yoga from '../assets/Mockups/Yoga.png'
import Drawgether from '../assets/Mockups/drawgether.png'
import ProjectCard from '../components/ProjectCard'
import CardList from '../components/card-module/CardList'

export default function Index() {
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

        <div className="mt-20">
          <div className="flex h-[76rem] gap-12">
            <ProjectCard
              imageUrl={Sportlink}
              alt="Sportlink"
              className="interactable w-[40%]"
              to="sportlink"
            />
            <ProjectCard
              imageUrl={Yoga}
              alt="Yoga"
              className="interactable w-[60%] "
              to="yoga"
            />
          </div>

          <div className="mt-12">
            <ProjectCard
              imageUrl={Drawgether}
              alt="Drawgether"
              className="interactable h-[84rem] w-full"
              to="drawgether"
            />
          </div>
        </div>
      </section>

      <section className="my-40 flex">
        <h3 className="mr-auto w-[44rem] text-40 font-medium">
          What can I do to{' '}
          <span className="text-zinc-100">efficiently support</span> you and
          your business?
        </h3>

        <CardList />
      </section>
    </>
  )
}
