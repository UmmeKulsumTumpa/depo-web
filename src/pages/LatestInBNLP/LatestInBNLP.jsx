const LatestInBNLP = () => {
	const articles = [
	  {
		title: "Weekly Team Meetings",
		description:
		  "Every Wednesday, our team holds a weekly meeting to discuss progress in research, upcoming projects, and challenges. These meetings ensure alignment and focus among team members.",
	  },
	  {
		title: "Visit to SoftBD Software Company",
		description:
		  "The BARTA team recently visited SoftBD, a leading software company in Bangladesh. Discussions included potential collaborations and an overview of their current AI projects.",
	  },
	  {
		title: "New Paper: Stemming in NLP",
		description:
		  "Our latest research paper, 'Stemming in Natural Language Processing - The Evolution and Current State with a Focus on Bangla,' explores stemming techniques for Bangla NLP.",
	  },
	  {
		title: "Completed Project: Knowledge Graph",
		description:
		  "We are excited to announce the completion of a comprehensive Knowledge Graph for Bangla NLP. This project improves data relationships and knowledge representation.",
	  },
	  {
		title: "Research on Representation of Ethnic Groups",
		description:
		  "We are working on representation models for ethnic groups in Bangladesh, focusing on their languages and traditions. This research aims to preserve linguistic diversity in the digital era.",
	  },
	];
  
	return (
	  <section className="py-16 bg-gray-100 text-black">
		<div className="container mx-auto px-6">
		  <h2 className="text-4xl font-bold mb-4">Latest News</h2>
		  <p className="text-lg leading-relaxed mb-6">
			Stay updated with our recent research activities, conferences, and publications.
		  </p>
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{articles.map((article, idx) => (
			  <div key={idx} className="bg-white shadow-lg p-6 rounded-lg">
				<h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
				<p className="text-gray-700 mb-4">{article.description}</p>
				<a href="#" className="text-blue-500 hover:underline">
				  Read more
				</a>
			  </div>
			))}
		  </div>
		</div>
	  </section>
	);
  };
  
  export default LatestInBNLP;
  