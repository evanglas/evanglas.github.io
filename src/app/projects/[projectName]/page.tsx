import Image from "next/image";
import fs from "fs";

import projectData from "../../projects.json" assert { type: "json" };
import Link from "next/link";

interface ProjectPageProps {
  params: {
    projectName: string;
  };
}

interface ProjectData {
  [key: string]: {
    // id: string;
    name: string;
    imagePath: string;
    tools: string[];
  };
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
    <body>
      <title>{projects[id].name}</title>
      <div id="title" className="flex flex-row justify-center p-10">
        <h1 className="text-5xl">{projects[id].name}</h1>
      </div>
      <div id="content-wrapper" className="flex flex-row justify-center">
        <div
          id="content"
          className="flex flex-row justify-center flex-wrap max-w-[1200px]"
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
              //   className="w-full"
            ></Image>
          </div>
          <div id="information" className="max-w-[500px] flex flex-col mx-5">
            <h2 className="text-center text-3xl pb-4">Description</h2>
            <p className="px-2">
              {readFile(
                "public/projectDescriptions/" + params.projectName + ".txt"
              )}
            </p>
            <h2 className="text-center text-3xl py-2">Tools Used</h2>
            <ul className="px-2">
              {projects[id].tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
            <h2 className="text-center text-3xl py-2">Additional Links</h2>
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
    </body>
  );
}
