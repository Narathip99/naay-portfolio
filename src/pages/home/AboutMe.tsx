import React from "react";
import aboutMe from "../../assets/images/about-me.png";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about-me"
      className="container mx-auto py-16 grid gap-8 grid-cols-1 md:grid-cols-12"
    >
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
          and gained hands-on experience in various technologies. My skills are
          complemented by a growth mindset, teamwork, adaptability, and
          problem-solving abilities.
        </p>

        <p className="mb-4">
          During my studies and work experiences, I worked on diverse projects
          that involved technologies such as PHP, JavaScript, TypeScript, React,
          Nextjs, Node.js, and RESTful APIs. These projects allowed me to apply
          my knowledge in real-world scenarios and collaborate effectively with
          others.
        </p>

        <p className="mb-4">
          I continually sought to learn and grow, staying updated with the
          latest technologies. When not coding, I enjoyed gaming, reading, and
          cooking. Connect with me on GitHub and LinkedIn, or visit my website
          at narathip.xyz.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
