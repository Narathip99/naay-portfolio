import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: "https://via.placeholder.com/568x463",
  },
  {
    id: 2,
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: "https://via.placeholder.com/568x463",
  },
  {
    id: 3,
    title: "Blog Website Template",
    description:
      "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: "https://via.placeholder.com/568x463",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container">
        <h1 className="text-4xl text-center font-medium mb-12">
          My <span className="font-bold">Projects</span>
        </h1>

        {/* projects */}
        <div className="flex flex-col gap-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`
                flex flex-col gap-8
                ${project.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}
              `}
            >
              <article className="w-full lg:w-1/2 rounded-md overflow-hidden">
                <img src={project.image} alt="" className="w-full h-auto" />
              </article>

              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <h2 className="text-3xl font-bold">0{project.id}.</h2>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p>{project.description}</p>
                <SquareArrowOutUpRight className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
