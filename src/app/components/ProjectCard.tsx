import Link from "next/link";
import Image from "next/image";

import Project from "./Project";

interface ProjectCardProps {
  id: string;
  project: Project;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Link href={`/projects/${encodeURIComponent(props.id)}`}>
      <div className="rounded-xl p-5 border-2 border-black m-5 shadow-lg  hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
        <div className="w-72 lg:w-80 text-center text-lg font-bold pb-2">
          {props.project.name}
        </div>
        <div className="rounded-xl overflow-hidden">
          <div className="relative w-72 h-72 lg:w-80 lg:h-80">
            <Image
              src={props.project.imagePath}
              alt="Picture"
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="288px"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
