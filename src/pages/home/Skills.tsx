import React from "react";
import iconBootstrap from "../../assets/icons/icon-bootstrap.svg";
import iconCSS from "../../assets/icons/icon-css3-alt.svg";
import iconDatabase from "../../assets/icons/icon-database-solid.svg";
import iconExpress from "../../assets/icons/icon-express.svg";
import iconFigma from "../../assets/icons/icon-figma.svg";
import iconGit from "../../assets/icons/icon-git.svg";
import iconHTML from "../../assets/icons/icon-html5.svg";
import iconJavaScript from "../../assets/icons/icon-javscript.svg";
import iconMongoDB from "../../assets/icons/icon-mongodb.svg";
// import iconNext from "../../assets/icons/icon-nextjs.svg";
import iconNode from "../../assets/icons/icon-nodejs.svg";
import iconPHP from "../../assets/icons/icon-php.svg";
import iconReact from "../../assets/icons/icon-react.svg";
import iconTailwind from "../../assets/icons/icon-tailwindcss.svg";
import iconTypeScript from "../../assets/icons/icon-typescript.svg";
import iconWordpress from "../../assets/icons/icon-wordpress.svg";

const skills = [
  // Frontend
  { name: "HTML", icon: iconHTML },
  { name: "CSS", icon: iconCSS },
  { name: "JavaScript", icon: iconJavaScript },
  { name: "TypeScript", icon: iconTypeScript },
  { name: "React", icon: iconReact },
  { name: "Tailwind CSS", icon: iconTailwind },
  { name: "Bootstrap", icon: iconBootstrap },
  /* { name: "Next.js", icon: iconNext }, */
  { name: "WordPress", icon: iconWordpress },
  { name: "Figma", icon: iconFigma },

  // Backend
  { name: "Node.js", icon: iconNode },
  { name: "Express", icon: iconExpress },
  { name: "PHP", icon: iconPHP },
  { name: "MongoDB", icon: iconMongoDB },
  { name: "MySQL", icon: iconDatabase },
  { name: "Git", icon: iconGit },
];

const Skills: React.FC = () => {
  return (
    <section className="container mx-auto py-16">
      <h1 className="text-5xl text-center font-medium mb-12">
        My <span className="font-bold">Skills</span>
      </h1>

      {/* skills */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border-2 rounded-sm border-black transition-colors duration-300 ease-in-out hover:bg-black group"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-2 transition-transform duration-300 ease-in-out group-hover:invert"
            />
            <span className="text-center transition-colors duration-300 ease-in-out group-hover:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
