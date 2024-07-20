import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectData, { Project } from "../../data/projectData";

const Projects: React.FC = () => {
  const projects: Project[] = projectData;

  return (
    <section id="projects" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-center font-medium mb-16">
          My <span className="font-bold">Projects</span>
        </h1>

        <div className="flex flex-col gap-32">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className={`flex flex-col gap-16 ${
                project.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <article className="w-full lg:w-1/2 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt={`Project image of ${project.title}`}
                  className="w-full h-auto max-h-[400px] object-cover"
                />
              </article>

              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <h2 className="text-4xl font-bold">0{project.id}.</h2>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p>{project.description}</p>
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SquareArrowOutUpRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          ))}
          <div className="flex justify-center items-center">
            <Link
              to="all-projects"
              className="text-2xl font-medium border-b-2 pb-1"
            >
              See all projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
