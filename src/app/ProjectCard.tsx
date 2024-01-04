import Link from "next/link";
import Image from "next/image";

import { Project } from "./Project";

interface ProjectCardProps {
  id: string;
  project: Project;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Link href={`/projects/${encodeURIComponent(props.id)}`}>
      <div className="rounded-xl absolute w-72 h-72 lg:w-80 lg:h-80 bg-emerald-200 transition flex flex-col justify-center items-center opacity-0 hover:opacity-90 z-10 p-5 text-center">
        {props.project.description}
      </div>
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
    </Link>
  );
}
