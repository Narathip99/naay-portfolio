import React from "react";
import HeroBaner from "./HeroBaner";
import Skills from "./Skills";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import Projects from "./Project";

const Home: React.FC = () => {
  return (
    <main>
      <HeroBaner />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
    </main>
  );
};

export default Home;
