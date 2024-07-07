import React from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Mutayloo Project E-Commerce",
    description:
      "Utilized the MERN stack (MongoDB, Express.js, React, Node.js) for the development. Emphasized clean code practices to facilitate team collaboration and easy maintenance. Collaborated with a team of 4 developers, holding regular scrum meetings and using version control with Git to ensure smooth integration of code.",
    image: "https://via.placeholder.com/1920x1080",
    link: "https://mutayloo.com/",
  },
  {
    id: 2,
    title: "Project Performance Reporting",
    description:
      "Developed a web-based system for reporting project performance following the PDCA model. Awarded 2nd runner-up, gold medal level for software innovation and embedded systems.",
    image: "https://via.placeholder.com/1920x1080",
    link: "#",
  },
  {
    id: 3,
    title: "Activity Management System",
    description:
      "Developed a web system for managing activities, allowing students to view participation percentages and submit activities. Provided teachers with tools to check attendance and review submitted activities for their students.",
    image: "https://via.placeholder.com/1920x1080",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-center font-medium mb-16">
          My <span className="font-bold">Projects</span>
        </h1>

        <div className="flex flex-col gap-32">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col gap-8 ${
                project.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <article className="w-full lg:w-1/2 rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
