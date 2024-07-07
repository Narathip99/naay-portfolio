import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-300px)] bg-white text-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl">
          I'm currently working on this page. Please check back later🙏
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
