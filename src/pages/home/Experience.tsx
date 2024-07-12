import React from "react";
import iconVersatileHaus from "../../assets/icons/icon-versatile-haus.png";
import iconGenerationThailand from "../../assets/icons/icon-generation-thailand.png";

const experience = [
  {
    title: "Junior Software Developer Apprentice",
    company: "Generation Thailand",
    icon: iconGenerationThailand,
    duration: "April 2024 - July 2024",
    description:
      "Studied full stack development using the MERN stack (MongoDB, Express.js, React, Node.js). Worked on individual and team projects, including an e-commerce project where I served as Scrum Master. Participated in the entire project lifecycle from business design to coding.",
  },
  {
    title: "WordPress Developer",
    company: "Versatile Haus Company Limited",
    icon: iconVersatileHaus,
    duration: "March - April 2024",
    description:
      "Developed and customized WordPress for various projects including e-commerce, LMS, and company profile websites. Optimized websites for SEO, resulting in high search engine rankings.",
  },
  {
    title: "Intern QA / Tester",
    company: "Versatile Haus Company Limited",
    icon: iconVersatileHaus,
    duration: "Feb 2022 - Oct 2022",
    description:
      "Performed manual testing, including end-user and Black Box Testing, Identified, documented, and tracked software defects and inconsistencies.",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-center font-medium mb-12">
          My <span className="font-bold">Experience</span>
        </h1>

        <div className="flex flex-col gap-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="flex flex-col gap-8 border rounded-sm py-8 px-8"
            >
              <div className="flex flex-col gap-2 lg:flex-row items-start justify-between">
                <div className="flex gap-4 items-center">
                  <img src={job.icon} alt={job.company} className="w-12 h-12" />
                  <h3 className="text-2xl font-semibold">{job.title}</h3>
                </div>
                <p>{job.duration}</p>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
