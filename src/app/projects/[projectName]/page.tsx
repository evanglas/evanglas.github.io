import Image from "next/image";
import fs from "fs";

import projectData from "../../projects.json" assert { type: "json" };
import Link from "next/link";
import TechChip from "./TechChip";

import { Project } from "../../Project";
import LinkChip from "./LinkChip";

interface ProjectPageProps {
  params: {
    projectName: string;
  };
}

interface ProjectData {
  [key: string]: Project;
}

const projects: ProjectData = projectData;

function readFile(filePath: string): string {
  try {
    const text = fs.readFileSync(filePath, "utf-8");
    return text;
  } catch (error) {
    console.error(`${error}`);
    return "";
  }
}

interface ProjectName {
  projectName: string;
}

export async function generateStaticParams() {
  const namesDict: ProjectName[] = Object.keys(projects).map((p, i) => ({
    projectName: p,
  }));
  return namesDict;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const id = params.projectName;
  const path = projects[params.projectName].imagePath;

  return (
    <div className="p-1">
      <title>{projects[id].name}</title>
      <div id="title" className="flex flex-row justify-center p-10">
        <h1 className="text-5xl">{projects[id].name}</h1>
      </div>
      <div id="content-wrapper" className="flex flex-row justify-center">
        <div
          id="content"
          className="flex flex-row w-screen justify-center flex-wrap max-w-[1200px]"
        >
          <div
            id="picture"
            className="rounded-2xl overflow-hidden flex flex-row justify-center relative xl:w-[500px] xl:h-[500px] w-[400px] max-w-[500px] h-[400px] mx-5"
          >
            <Image
              src={path}
              alt="Picture"
              fill={true}
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div
            id="information"
            className="max-w-[500px] flex flex-col justify-between mx-5"
          >
            <h2 className="text-center text-3xl pb-4">Description</h2>
            <p className="px-2">{projects[id].description}</p>
            <h2 className="text-center text-3xl py-2">Tools Used</h2>
            <div id="tools" className="flex flex-row flex-wrap justify-around">
              {projects[id].tools.map((tool: string) => (
                <TechChip key={tool} name={tool} />
              ))}
            </div>
            <h2 className="text-center text-3xl py-2">Links</h2>
            <div id="tools" className="flex flex-row flex-wrap justify-around">
              {Object.entries(projects[id].links).map(([linkName, link]) => (
                <a key={linkName} href={link}>
                  <LinkChip name={linkName} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="back" className="flex flex-row justify-center">
        <Link href="/#projects">
          <span className="text-8xl transition hover:opacity-50 hover:cursor-pointer">
            &larr;
          </span>
        </Link>
      </div>
    </div>
  );
}
