import ProjectCard from '../components/ProjectCard'
import Sportlink from '../assets/Mockups/Sportlink.png'
import Yoga from '../assets/Mockups/Yoga.png'
import Drawgether from '../assets/Mockups/drawgether.png'

const WorkPage = () => {
  return (
    <>
      <h1 className="mb-32 mt-80 text-64">
        Check out my <span className="text-zinc-100">recent projects</span>
      </h1>

      <section className="mb-80 grid grid-cols-2 gap-12">
        <ProjectCard
          imageUrl={Sportlink}
          alt="Sportlink"
          className="interactable"
          to="sportlink"
        />
        <ProjectCard
          imageUrl={Yoga}
          alt="Yoga"
          className="interactable"
          to="yoga"
        />
        <ProjectCard
          imageUrl={Drawgether}
          alt="Drawgether"
          className="interactable h-[84rem]"
          to="drawgether"
        />
        <ProjectCard
          imageUrl={Drawgether}
          alt="Drawgether"
          className="interactable h-[84rem]"
          to="drawgether"
        />
      </section>
    </>
  )
}
export default WorkPage
