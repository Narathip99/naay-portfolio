import React from "react";
import aboutMe from "../../assets/images/about-me.png";

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="container mx-auto py-16 grid gap-8 grid-cols-1 md:grid-cols-12">
      <figure className="col-span-1 md:col-span-4 flex justify-center">
        <img
          src={aboutMe}
          alt="About Me"
          className="object-contain max-w-full h-auto"
        />
      </figure>
      <div className="col-span-1 md:col-span-8 flex flex-col justify-start">
        <h1 className="text-5xl font-medium mt-2 mb-12">
          About <span className="font-bold">Me</span>
        </h1>
        <p className="mb-4">
          I am Narathip Thakham, a Full Stack Developer from Phrae, Thailand,
          passionate about software development and solving problems. I recently
          graduated with a Higher Vocational Certificate in Computer Software
          and have hands-on experience in various technologies including HTML,
          CSS, JavaScript, TypeScript, PHP, React, Node.js, Express.js, RESTful
          API, SQL, NoSQL, and Unit Testing. My skills are complemented by a
          growth mindset, teamwork, adaptability, and problem-solving abilities.
        </p>
        <p className="mb-4">
          I enhanced my skills through a bootcamp at Generation Thailand, where
          I mastered the MERN stack and led an e-commerce project as Scrum
          Master. I also served as a WordPress Developer and Intern QA/Tester at
          Versatile Haus Company Limited, developing and optimizing websites and
          conducting manual testing.
        </p>
        <p className="mb-4">
          I continuously strive to learn and grow, staying updated with the
          latest technologies. When I am not coding, I enjoy hiking, blogging,
          and engaging with the developer community. Connect with me on
          <a href="https://github.com/Narathip99" className="underline">
            GitHub
          </a>
          and
          <a href="https://linkedin.com/in/narathip-tk" className="underline">
            LinkedIn
          </a>
          , or visit my website at
          <a href="http://narathip.xyz" className="underline">
            narathip.xyz
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
