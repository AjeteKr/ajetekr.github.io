import React from "react";

const Project = ({ title, description, date, image, githubLink }) => {
  return (
    <div className="bg-white bg-opacity-50 shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">{title}</h2>
      <p className="mb-4 text-[#2d3748]">{description}</p>
      <h3 className="text-xl font-semibold mb-2 text-[#1a202c]">Date: {date}</h3>
      <img src={image} alt={title} className="mb-4 rounded-lg" />
      <div className="text-center">
        <a href={githubLink} className="text-blue-700 hover:underline mt-2 block text-lg">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
