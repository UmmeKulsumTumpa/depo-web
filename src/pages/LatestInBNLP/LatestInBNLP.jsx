const LatestInBNLP = () => {
	return (
		<section className="py-16 bg-white bg-gray-100 text-black" 
		style={{
			height: '100%',
			marginLeft: '10%',
		  marginRight: '10%',
		}} >
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold mb-4">Latest News</h2>
				<p className="text-lg leading-relaxed mb-6">
					Stay updated with our recent research activities, conferences, and publications.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* News Article 1 */}
					<div className="bg-gray-100 shadow-lg p-6 rounded-lg">
						<h3 className="text-2xl font-semibold mb-2">Weekly Team Meetings</h3>
						<p className="text-gray-700 mb-4">
							Every Wednesday, our team holds a weekly meeting to discuss the progress made in research,
							upcoming projects, and challenges we're facing. These meetings help ensure that every member
							is aligned and focused on achieving our common goals.
						</p>
						<a href="#" className="text-blue-500 hover:underline">
							Read more
						</a>
					</div>

					{/* News Article 2 */}
					<div className="bg-gray-100 shadow-lg p-6 rounded-lg">
						<h3 className="text-2xl font-semibold mb-2">Visit to SoftBD Software Company</h3>
						<p className="text-gray-700 mb-4">
							Recently, the BARTA team visited SoftBD, one of the leading software companies in Bangladesh.
							We had insightful discussions about potential collaborations, and they provided us with an
							overview of their current projects in AI and software development.
						</p>
						<a href="#" className="text-blue-500 hover:underline">
							Read more
						</a>
					</div>

					{/* News Article 3 */}
					<div className="bg-gray-100 shadow-lg p-6 rounded-lg">
						<h3 className="text-2xl font-semibold mb-2">New Paper: Stemming in NLP</h3>
						<p className="text-gray-700 mb-4">
							Our latest research paper titled "Stemming in Natural Language Processing - The Evolution and
							Current State with a Focus on Bangla" has been published. The paper dives deep into the
							development of stemming techniques and how they have evolved over time for the Bangla language.
						</p>
						<a href="#" className="text-blue-500 hover:underline">
							Read more
						</a>
					</div>

					{/* News Article 4 */}
					<div className="bg-gray-100 shadow-lg p-6 rounded-lg">
						<h3 className="text-2xl font-semibold mb-2">Completed Project: Knowledge Graph</h3>
						<p className="text-gray-700 mb-4">
							We are excited to announce the completion of our latest project focused on building a
							comprehensive Knowledge Graph for Bangla NLP. This graph will enable more effective data
							relationships and knowledge representation.
						</p>
						<a href="#" className="text-blue-500 hover:underline">
							Read more
						</a>
					</div>

					{/* News Article 5 */}
					<div className="bg-gray-100 shadow-lg p-6 rounded-lg">
						<h3 className="text-2xl font-semibold mb-2">Research on Representation of Ethnic Groups</h3>
						<p className="text-gray-700 mb-4">
							Our team has been working on creating representation models for ethnic groups in Bangladesh,
							focusing on their languages and traditions. This research aims to preserve the linguistic
							diversity of minority groups in the digital age.
						</p>
						<a href="#" className="text-blue-500 hover:underline">
							Read more
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LatestInBNLP;
