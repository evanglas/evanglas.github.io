import Image from "next/image";

import profile_picture from "public/profile_picture.jpg";

import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Landing() {
  return (
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
            priority={true}
            className="rounded-2xl w-52 md:w-80"
          />
        </div>
        <div id="name_links" className="py-2 px-5 flex flex-col items-center">
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
        I am an MS in Electrical & Computer Engineering (ECE) student and recent
        ECE, CS graduate at Duke University. My professional interests include
        data science, machine learning, and software engineering. Scroll to
        learn more about some of my past projects and coursework.
        <hr className="border-2 border-black w-full my-1" />
      </div>
    </div>
  );
}
