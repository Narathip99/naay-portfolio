import React from "react";
import aboutMe from "../../assets/images/about-me.png";

const AboutMe: React.FC = () => {
  return (
    <section className="container mx-auto py-16 grid gap-8 grid-cols-1 md:grid-cols-12">
      <figure className="col-span-1 md:col-span-4 flex justify-center">
        <img
          src={aboutMe}
          alt="About Me"
          className="object-contain max-w-full h-auto"
        />
      </figure>
      <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
        <h1 className="text-4xl font-medium mb-12">
          About <span className="font-bold">Me</span>
        </h1>
        <p className="text-lg mb-4">
          I'm a passionate, self-proclaimed designer who specializes in full
          stack development (React.js & Node.js). I am very enthusiastic about
          bringing the technical and visual aspects of digital products to life.
          User experience, pixel perfect design, and writing clean, readable,
          highly performant code matters to me.
        </p>
        <p className="text-lg mb-4">
          I began my journey as a web developer in 2015, and since then, I've
          constantly strived to grow and evolve as a developer, taking on new
          challenges and learning the latest technologies. Join the way. Now, in
          my early thirties, six years after starting my web development
          journey, I'm building cutting-edge web applications using modern
          technologies such as Next.js, TypeScript, Node.js, TailwindCSS,
          Supabase and much more.
        </p>
        <p className="text-lg mb-4">
          When I'm not in full-on developer mode, you can find me hiking,
          blogging on Twitter or on Indie Hackers, witnessing the journey of
          many developers or writing some of my articles. You can follow me on
          Twitter where I share tech-related bites and build in public, or you
          can follow me on GitHub.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
