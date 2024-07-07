import React from "react";
// components
import Button from "../../components/ui/Button";
// icons and images
import heroBanner from "../../assets/images/hero-banner.png";
import iconGithub from "../../assets/icons/icon-github.svg";
import iconLinkedin from "../../assets/icons/icon-linkedin-in.svg";
import iconPhone from "../../assets/icons/icon-phone-solid.svg";
import iconEnvelope from "../../assets/icons/icon-envelope-solid.svg";

const HeroBaner: React.FC = () => {
  const handleMailClick = () => {
    window.location.href = "mailto:narathip.tk@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0924617473";
  };

  return (
    <section className="container py-16">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center relative">
        <div className="flex flex-col gap-12">
          <div className="text-2xl lg:text-4xl 2xl:text-5xl font-medium">
            <h1>
              Hi, I am <span className="font-bold">Narathip Thakham.</span>
            </h1>
            <h1 className="my-4">
              <span className="text-6xl md:text-7xl font-bold font-outline">
                Fullstack Developer
              </span>
            </h1>
            <h1>
              based in <span className="font-bold">Phrae, Thailand.</span>
            </h1>
          </div>

          <p>
            A recent graduate passionate about software development with a
            proactive problem-solving approach and a love for technology.
            Experienced in various projects, I bring dedication and strong
            skills to every task. Eager to apply my knowledge and drive
            innovation in the tech industry while continuously learning and
            growing to meet new challenges.
          </p>
        </div>

        <img
          src={heroBanner}
          alt="Hero Banner"
          className="hidden lg:block w-1/2"
        />

        <div className="mt-12 lg:absolute lg:-bottom-16 2xl:-bottom-6 left-0">
          <div className="flex gap-4">
            <Button
              to="https://github.com/Narathip99"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-black text-black hover:bg-black hover:text-white duration-300 ease-in-out group"
            >
              <img
                src={iconGithub}
                alt="GitHub"
                className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:invert"
              />
            </Button>
            <Button
              to="https://www.linkedin.com/in/narathip-tk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-black text-black hover:bg-black hover:text-white duration-300 ease-in-out group"
            >
              <img
                src={iconLinkedin}
                alt="LinkedIn"
                className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:invert"
              />
            </Button>
            <Button
              onClick={handlePhoneClick}
              className="bg-white border-2 border-black text-black hover:bg-black hover:text-white duration-300 ease-in-out group"
            >
              <img
                src={iconPhone}
                alt="Phone"
                className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:invert"
              />
            </Button>
            <Button
              onClick={handleMailClick}
              className="bg-white border-2 border-black text-black hover:bg-black hover:text-white duration-300 ease-in-out group"
            >
              <img
                src={iconEnvelope}
                alt="Mail"
                className="w-6 h-6 transition-transform duration-300 ease-in-out group-hover:invert"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBaner;
