import React from "react";

// components
import HamburgerMenu from "../ui/HamburgerMenu";
import Button from "../ui/Button";

// icons
import { Download } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-3xl font-semibold">naay</h1>

        <nav className="hidden sm:block"></nav>

        <Button
          to="https://drive.google.com/file/d/1LfalhM6piPuyRQ9lfKFi9zv5q-AU6zaq/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex sm:gap-2 sm:items-center"
        >
          <span className="text-lg font-medium">Resume</span>
          <Download className="w-4 h-4" strokeWidth={3} />
        </Button>

        <div className="sm:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
