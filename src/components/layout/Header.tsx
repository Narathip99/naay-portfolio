import React from "react";

// components
import HamburgerMenu from "../ui/HamburgerMenu";
import Button from "../ui/Button";

// icons
import { Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header>
      <div className="container flex items-center justify-between py-4">
        <Link to="/">
          <h1 className="text-3xl font-semibold">naay</h1>
        </Link>

        {location.pathname === "/" ? (
          <nav className="hidden lg:flex lg:gap-8 text-lg">
            <a href="#experience">Experience</a>
            <a href="#about-me">About Me</a>
            <a href="#projects">Projects</a>
          </nav>
        ) : null}

        <Button
          to="https://drive.google.com/file/d/1VVVvrOp2GzM2EpUNAmh7oOWKM5l9Lkg1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex sm:gap-2 sm:items-center border-2 border-black box-border hover:bg-transparent hover:text-black hover:border-2 hover:border-black"
        >
          <span className="text-lg font-medium">Resume</span>
          <Download className="w-4 h-4" strokeWidth={3} />
        </Button>

        <div className="lg:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
