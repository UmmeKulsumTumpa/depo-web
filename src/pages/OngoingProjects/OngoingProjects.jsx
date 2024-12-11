import React from "react";

const OngoingProjects = () => {
  const projects = [
    {
      title: "Chakma Language Dataset: A Step Towards Linguistic and Cultural Empowerment",
      details:
        "The Chakma language dataset project focuses on creating a comprehensive and high-quality dataset to preserve and promote the Chakma language, which is underrepresented in digital and linguistic studies. The project combines linguistic expertise and computational techniques to enable future applications like natural language processing (NLP), machine translation, and cultural preservation.",
    },
    {
      title: "Bangla Sign Language Processing",
      details:
        "Developing tools and technologies to facilitate the understanding and use of Bangla sign language.",
    },
    {
      title: "Knowledge Graph",
      details:
        "Building a comprehensive knowledge graph to represent Bangla language data relationships effectively.",
    },
    {
      title: "Parts of Speech Tagging",
      details:
        "Creating accurate and scalable parts-of-speech tagging for Bangla text to enhance NLP applications.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Ongoing Projects
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Explore the projects currently in development to advance linguistic and cultural studies.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-indigo-700 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-600 flex-grow">
                {project.details}
              </p>
              {/* Optional: Add a Learn More button or link */}
              {/* 
              <a
                href="#"
                className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Learn More &rarr;
              </a>
              */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
