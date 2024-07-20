import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:0924617473";
  };

  return (
    <footer className="bg-black text-white">
      <div className="container py-8 xl:py-16 xl:pb-24 flex gap-8 flex-col sm:flex-row items-start sm:items-end justify-between">
        <div>
          <h5 className="text-sm font-light">Get in touch</h5>
          <h1 className="text-2xl lg:text-4xl font-semibold">
            <a href="mailto:narathip.tk@gmail.com">narathip.tk@gmail.com</a>
          </h1>
        </div>

        <ul className="flex gap-4 font-light">
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/Narathip99"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.linkedin.com/in/narathip-tk/"
            >
              Linked In
            </Link>
          </li>
          <li>
            <button onClick={handlePhoneClick}>Phone</button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
