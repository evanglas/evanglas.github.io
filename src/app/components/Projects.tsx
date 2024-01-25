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
        <div key={id} className="rounded-xl p-5 border-2 border-black m-5">
          <div className="w-72 lg:w-80 text-center text-lg font-bold pb-2">
            {project.name}
          </div>
          <div className="rounded-xl overflow-hidden">
            <ProjectCard id={id} project={project} />
          </div>
        </div>
      ))}
    </div>
  );
}
