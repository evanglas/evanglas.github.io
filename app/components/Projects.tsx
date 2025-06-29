import Project from "./Project";
import projectData from "./projects.json" assert { type: "json" };
import ProjectCard from "./ProjectCard";

interface ProjectData {
  [key: string]: Project;
}

const projectsDict: ProjectData = projectData;

export default function Projects() {
  return (
    <div
      id="project_cards"
      className="flex flex-row flex-wrap justify-around max-w-7xl"
    >
      {Object.entries(projectsDict).map(([id, project]) => (
        <ProjectCard key={id} id={id} project={project} />
      ))}
    </div>
  );
}
