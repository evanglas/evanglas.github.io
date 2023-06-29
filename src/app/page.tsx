"use client";

import Image from "next/image";
import profile_picture from "public/profile_picture.jpg";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faFile, fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin, fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { motion } from "framer-motion";

import { config } from "@fortawesome/fontawesome-svg-core";
import ProjectCard from "./ProjectCard";

import projectData from "./projects.json" assert { type: "json" };

config.autoAddCss = false;

library.add(fas, far, fab);

interface Project {
  name: string;
  imagePath: string;
  tools: string[];
}

interface ProjectData {
  [key: string]: Project;
}

const projectsDict: ProjectData = projectData;

export default function Home() {
  return (
    <div>
      <div id="index_wrapper" className="flex flex-row w-screen justify-center">
        <div
          id="main_content"
          className="flex flex-col mt-5 md:mt-0 max-w-3xl h-fit md:h-[80vh] items-center justify-center"
        >
          <div
            id="picture_name_links"
            className="flex flex-row flex-wrap justify-center"
          >
            <div id="picture" className="rounded-2xl">
              <Image
                title="Picture"
                src={profile_picture}
                alt="Profile Picture"
                className="rounded-2xl w-52 md:w-80"
              />
            </div>
            <div
              id="name_links"
              className="py-2 px-5 flex flex-col items-center"
            >
              <div
                id="name"
                className="text-center text-5xl md:text-9xl md:text-left w-80"
              >
                Evan Glas
              </div>
              <div
                id="links"
                className="w-52 md:w-full m-2 flex flex-row justify-between rounded-xl border-4 border-black p-2 md:p-5"
              >
                <a href="https://www.linkedin.com/in/evanglas/">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="transition hover:text-emerald-300"
                  />
                </a>
                <a href="https://github.com/evanglas">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="transition hover:text-emerald-300"
                  />
                </a>
                <a href="mailto:eglas27@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2x"
                    className="transition hover:text-emerald-300"
                  />
                </a>
                <a href="Evan Glas Resume.pdf">
                  <FontAwesomeIcon
                    icon={faFile}
                    size="2x"
                    className="transition hover:text-emerald-300"
                  />
                </a>
              </div>
            </div>
          </div>
          <div id="about_text" className="px-4 text-left w-full md:pt-4">
            <hr className="border-2 border-black w-full my-1" />
            Hi! I’m a recent Electrical & Computer Engineering + CS graduate and
            incoming MS in Electrical & Computer Engineering Student at Duke
            University. I hold professional interests in quantitative finance,
            data science, machine learning, and software engineering. I enjoy
            solving difficult problems and building creative technical
            solutions. Please feel free to explore some of my past projects!
            <hr className="border-2 border-black w-full my-1" />
          </div>
        </div>
      </div>
      <div
        id="down_arrow"
        className="flex flex-row justify-center my-3 h-fit md:h-[20vh]"
      >
        <ScrollLink to="projects" smooth={true} duration={500}>
          <motion.span
            className="text-8xl block hover:cursor-pointer hover:opacity-50"
            animate={{ y: [-4, 4, -4] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            &darr;
          </motion.span>
        </ScrollLink>
      </div>
      <div id="projects" className="flex flex-col items-center">
        <div id="projects_title" className="text-center w-full mb-5 text-5xl">
          Projects
        </div>
        <div
          id="project_cards"
          className="flex flex-row flex-wrap justify-around max-w-5xl"
        >
          {Object.entries(projectsDict).map(([id, project]) => (
            <div key={id} className="m-5 rounded-2xl">
              <ProjectCard id={id} imgPath={project.imagePath} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
