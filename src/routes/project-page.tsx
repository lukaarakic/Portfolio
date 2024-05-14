import StickySection from '../components/StickySection'

import Start from '../assets/project-images/home.png'
import HomePage from '../assets/project-images/crJdAgR.png'
import SearchPage from '../assets/project-images/iXoYGyx.png'
import ProfilePage from '../assets/project-images/oNTMkIc.png'
import PlayPage from '../assets/project-images/WJhED1v.png'
import GamePage from '../assets/project-images/UcSuR9f.png'

const ProjectPage = () => {
  return (
    <>
      <section>
        <h1 className="mb-16 mt-80 text-64 font-bold text-zinc-100">
          Drawgether
        </h1>
        <ul className="mb-24 flex items-start justify-between">
          <li>
            <h3 className="text-24 font-bold text-zinc-100">Role</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              Front-end Developer
            </p>
          </li>
          <li>
            <h3 className="text-24 font-bold text-zinc-100">Platforms</h3>
            <p className="max-w-[35rem] text-20 font-medium">Web</p>
          </li>
          <li>
            <h3 className="text-24 font-bold text-zinc-100">Assignment</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              Build an app that helps people express their creativity in the
              digital world.
            </p>
          </li>
          <li>
            <h3 className="text-24 font-bold text-zinc-100">Objective</h3>
            <p className="max-w-[35rem] text-20 font-medium">
              To create a fun and social environment where people can express
              themselves creatively through drawing based on dynamic prompts
              from ChatGPT.
            </p>
          </li>
          <li>
            <h3 className="text-24 font-bold text-zinc-100">Tehnologies</h3>
            <p className="max-w-[35rem] text-20 font-medium">Remix, React</p>
          </li>
        </ul>
      </section>
      <section className="mb-20">
        <img src={Start} alt="" className="mb-8 w-full rounded-40" />

        <div className="mb-8 grid w-full grid-cols-project-45/55 gap-8">
          <img
            src={HomePage}
            alt=""
            className="h-[50rem] w-full rounded-40 object-cover object-top"
          />
          <img
            src={SearchPage}
            alt=""
            className="h-[50rem] w-full rounded-40 object-cover object-top"
          />
        </div>

        <div className="grid w-full grid-cols-project-55/45 gap-8">
          <img
            src={PlayPage}
            alt=""
            className="h-[50rem] w-full rounded-40 object-cover object-top"
          />
          <img
            src={ProfilePage}
            alt=""
            className="h-[50rem] w-full rounded-40 object-cover object-top"
          />
        </div>
      </section>

      <StickySection
        title={
          <h2 className="sticky top-44 text-40 ">
            Project <span className=" text-zinc-100">Overview</span>
          </h2>
        }
        content={
          <div className="max-w-[97rem]">
            <p className="mb-12 text-24 text-zinc-100">
              Egestas dui id ornare arcu odio. Ornare lectus sit amet est
              placerat in egestas erat imperdiet. Aenean vel elit scelerisque
              mauris pellentesque pulvinar. Mauris a diam maecenas sed enim ut
              sem viverra. Posuere mori leo urna molestie at. Cras tincidunt
              lobortis feugiat vivamus at augue eget arcu dictum. Aliquet
              bibendu enfacilisis gravida neque convallis a. At urna condimentum
              mattis pellentesque id nibh tortor id aliquet.
            </p>

            <img src={GamePage} alt="" className="rounded-40" />
          </div>
        }
      />

      <StickySection
        title={
          <h2 className="sticky top-44 text-40 text-zinc-100">Execution</h2>
        }
        content={
          <p className="mb-12 max-w-[97rem] text-24 text-zinc-100">
            Egestas dui id ornare arcu odio. Ornare lectus sit amet est placerat
            in egestas erat imperdiet. Aenean vel elit scelerisque mauris
            pellentesque pulvinar. Mauris a diam maecenas sed enim ut sem
            viverra. Posuere mori leo urna molestie at. Cras tincidunt lobortis
            feugiat vivamus at augue eget arcu dictum. Aliquet bibendu
            enfacilisis gravida neque convallis a. At urna condimentum mattis
            pellentesque id nibh tortor id aliquet. Egestas dui id ornare arcu
            odio. Ornare lectus sit amet est placerat in egestas erat imperdiet.
            Aenean vel elit scelerisque mauris pellentesque pulvinar. Mauris a
            diam maecenas sed enim ut sem viverra. Ornare lectus sit amet est
            placerat in egestas erat imperdiet. Cras tincidunt lobortis feugiat
            vivamus at augue eget arcu dictum. Posuere mori leo urna molestie
            at. Aliquet bibendu enfacilisis gravida neque convallis a.
          </p>
        }
        className="border-t border-zinc-500"
      />
    </>
  )
}
export default ProjectPage
