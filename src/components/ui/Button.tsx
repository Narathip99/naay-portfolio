import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  className?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  to,
  className = "",
  target,
  rel,
}) => {
  const baseStyles =
    "bg-black px-4 py-2 rounded-sm text-white focus:outline-none transition-colors duration-300";

  const combinedStyles = `${baseStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default Button;
