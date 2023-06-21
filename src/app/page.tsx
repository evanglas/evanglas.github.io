import Image from 'next/image'
import profile_picture from './profile_picture - Copy.jpg';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faFile, fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin, fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import { fa-linkedin } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import ProjectCard from './ProjectCard';

import projectData from './projects.json' assert {type: 'json'};

config.autoAddCss = false

library.add(fas, far, fab)

interface Project {
  id: string;
  imagePath: string;
}

interface ProjectData {
  [key: string]: Project;
}

const projects: ProjectData = projectData;


export default function Home() {
  return (
    <body>
      <div id="index_wrapper" className="flex flex-row justify-center">
        <div id="main_content" className="flex flex-col max-w-3xl p-10 items-center">
          <div id="picture_name_links" className="flex flex-row flex-wrap justify-center">
            <div id="picture" className="rounded-2xl">
              <Image src={profile_picture} alt="Profile Picture" className="rounded-2xl w-52 md:w-80"/>
            </div>
            <div id="name_links" className="py-2 px-5 flex flex-col items-center">
              <div id="name" className='text-center text-5xl md:text-9xl md:text-left w-80'>Evan Glas</div>
              <div id="links" className="w-52 md:w-full m-2 flex flex-row justify-between rounded-xl border-4 border-black p-2 md:p-5">
                <a href="https://www.linkedin.com/in/evanglas/"><FontAwesomeIcon icon={faLinkedin} size="2x" className="transition hover:text-emerald-300"/></a>
                <a href="https://github.com/evanglas"><FontAwesomeIcon icon={faGithub} size="2x" className="transition hover:text-emerald-300"/></a>
                <a href="mailto:eglas27@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" className="transition hover:text-emerald-300"/></a>
                <a href="Evan Glas Resume.pdf"><FontAwesomeIcon icon={faFile} size="2x" className="transition hover:text-emerald-300"/></a>
              </div>
            </div>
          </div>
          <div id="about_text" className="text-left w-full md:py-4">
          <hr className="border-2 border-black w-full my-1"/>
            Hi! I’m a recent Electrical & Computer Engineering + CS graduate and incoming MS in Electrical & Computer Engineering Student at Duke University. I hold professional interests in quantitative finance, data science, machine learning, and software engineering. I enjoy solving difficult problems and building creative technical solutions. Please feel free to explore some of my past projects!
            <hr className="border-2 border-black w-full my-1"/>
          </div>
        </div>
      </div>
      <div id="projects" className="flex flex-col items-center">
        <div id="projects_title" className="text-center w-full mb-5 text-5xl">Projects</div>
        <div id="project_cards" className="flex flex-row flex-wrap justify-around max-w-5xl">
          {
            Object.entries(projects).map(([id, project]) => (
              <div key={id} className="m-5 rounded-2xl"><ProjectCard id={id} imgPath={project.imagePath}/></div>
            ))
          }
        </div>
      </div>
    </body>
  )
}