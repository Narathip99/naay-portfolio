import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container py-8 xl:py-16 xl:pb-24 flex gap-8 flex-col sm:flex-row items-start sm:items-end justify-between">
        <div>
          <h5 className="text-sm font-light">Get in touch</h5>
          <h1 className="text-2xl lg:text-4xl font-semibold">
            narathip.tk@gmail.com
          </h1>
        </div>

        <ul className="flex gap-4 font-light">
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="https://github.com/Narathip99"
            >
              github
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
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
