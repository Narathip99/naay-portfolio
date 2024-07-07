import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="cursor-pointer flex flex-col items-center justify-center focus:outline-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {isOpen && (
        <nav className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <button
            onClick={closeMenu}
            className="absolute top-5 right-4 text-3xl focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="hidden">
            <Link
              to="/"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200 text-2xl"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200 text-2xl"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200 text-2xl"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200 text-2xl"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
