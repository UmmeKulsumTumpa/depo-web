import React from "react";

const OngoingProjects = () => {
  const projects = [
    {
      title: "Chakma Language Dataset: A Step Towards Linguistic and Cultural Empowerment",
      details: (
        <>
          The Chakma Language Dataset project is dedicated to the preservation and promotion of the Chakma language, a rich and vibrant language that is currently underrepresented in digital and linguistic research.
          <br /><br />
          <strong>Key Initiatives:</strong>
          <br />
          - Comprehensive Data Collection: Gathering a diverse range of textual data, including literature, oral histories, and contemporary writings.
          <br />
          - Linguistic Expertise: Collaborating with native speakers and linguists to ensure the accuracy and relevance of the dataset.
          <br />
          - Computational Techniques: Utilizing advanced machine learning algorithms to process and structure the data for various applications.
          <br /><br />
          <strong>Future Applications:</strong>
          <br />
          - Natural Language Processing (NLP): Enabling the development of language models that understand and generate Chakma text.
          <br />
          - Machine Translation: Facilitating translation between Chakma and other languages to bridge communication gaps.
          <br />
          - Cultural Preservation: Documenting and safeguarding the linguistic heritage for future generations.
        </>
      ),
    },
    {
      title: "Bangla Sign Language Processing",
      details: (
        <>
          The Bangla Sign Language Processing project aims to bridge the communication gap between the Deaf community and the wider population by developing innovative tools and technologies.
          <br /><br />
          <strong>Key Objectives:</strong>
          <br />
          - Gesture Recognition: Implementing computer vision techniques to accurately interpret Bangla sign language gestures.
          <br />
          - Real-Time Translation: Creating systems that can translate sign language into spoken or written Bangla in real-time.
          <br />
          - User-Friendly Interfaces: Designing applications that are intuitive and accessible for users of all ages and technical proficiencies.
          <br /><br />
          <strong>Impact:</strong>
          <br />
          - Enhanced Communication: Facilitating smoother interactions between Deaf individuals and those who do not understand sign language.
          <br />
          - Educational Tools: Providing resources for learning and teaching Bangla sign language in schools and communities.
        </>
      ),
    },
    {
      title: "Knowledge Graph",
      details: (
        <>
          The Knowledge Graph project is focused on constructing a robust and interconnected representation of Bangla language data. This graph-based structure captures the intricate relationships between various linguistic elements, enabling advanced data analysis and retrieval.
          <br /><br />
          <strong>Project Components:</strong>
          <br />
          - Data Integration: Aggregating data from diverse sources such as dictionaries, encyclopedias, and online content to build a comprehensive dataset.
          <br />
          - Semantic Relationships: Defining and modeling the relationships between words, phrases, and concepts to reflect their real-world associations.
          <br />
          - Scalability: Ensuring the knowledge graph can handle large volumes of data and accommodate future expansions.
          <br /><br />
          <strong>Applications:</strong>
          <br />
          - Enhanced Search Engines: Improving the accuracy and relevance of search results for Bangla queries.
          <br />
          - AI and Machine Learning: Providing a foundational dataset for training intelligent systems that understand Bangla context and semantics.
        </>
      ),
    },
    {
      title: "Parts of Speech Tagging",
      details: (
        <>
          The Parts of Speech (POS) Tagging project is dedicated to developing accurate and scalable tagging systems for Bangla text. By identifying and categorizing the grammatical components of sentences, this project enhances various Natural Language Processing (NLP) applications.
          <br /><br />
          <strong>Project Goals:</strong>
          <br />
          - Accuracy: Achieving high precision in identifying nouns, verbs, adjectives, and other parts of speech within Bangla sentences.
          <br />
          - Scalability: Designing algorithms that can efficiently process large datasets without compromising performance.
          <br />
          - Adaptability: Ensuring the tagging system can handle diverse text genres, including formal literature, colloquial speech, and digital communications.
          <br /><br />
          <strong>Benefits:</strong>
          <br />
          - Improved NLP Applications: Enhancing tools like grammar checkers, text analyzers, and language translators by providing detailed grammatical insights.
          <br />
          - Linguistic Research: Offering valuable data for scholars studying Bangla syntax and grammar patterns.
        </>
      ),
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
              <div className="text-gray-600 flex-grow">
                {project.details}
              </div>
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
