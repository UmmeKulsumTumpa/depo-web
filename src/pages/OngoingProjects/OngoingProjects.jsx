// src/pages/OngoingProjects/OngoingProjects.jsx

import React from "react";

const OngoingProjects = () => {
  const projects = [
    {
      title: "Bangla Sign Language Processing",
      details: "Detailed description about Bangla Sign Language Processing will go here.",
    },
    {
      title: "Knowledge Graph",
      details: "Detailed description about Knowledge Graph will go here.",
    },
    {
      title: "Parts of Speech Tagging",
      details: "Detailed description about Parts of Speech Tagging will go here.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#00df9a]">
          Ongoing Projects
        </h1>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border rounded-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-700">{project.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;
