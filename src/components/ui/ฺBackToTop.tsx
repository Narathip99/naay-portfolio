import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-white text-black rounded-full shadow-xl hover:bg-zinc-100 focus:outline-none"
        >
          <ChevronUp />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
