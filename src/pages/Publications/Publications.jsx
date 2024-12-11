import PublicationDetail from "./components/PublicationDetail";

const Publications = () => {
	const publications = [
		{
			id: 1,
			title: "Contrastive Learning for API Aspect Analysis",
			authors: "GM Shahariar, Tahmid Hasan, Anindya Iqbal, Gias Uddin",
			publishedIn:
				"38th IEEE/ACM International Conference on Automated Software Engineering (ASE 2023)",
			pdf: "https://arxiv.org/abs/2307.16878",
			code: "https://github.com/csebuetnlp/",
		},
		{
			id: 2,
			title:
				"CrossSum: Beyond English-Centric Cross-Lingual Abstractive Text Summarization for 1500+ Language Pairs",
			authors:
				"Abhik Bhattacharjee, Tahmid Hasan, Wasi Uddin Ahmad, Yuan-Fang Li, Yong-bin Kang, Rifat Shahriyar",
			publishedIn:
				"Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics: ACL 2023",
			pdf: "https://arxiv.org/abs/2307.16878",
			code: "https://github.com/csebuetnlp/",
		},
	];

	return (
		<section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
			<h1 className="text-3xl sm:text-4xl font-semibold pb-8 text-center">
				Publications
			</h1>
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
				{publications.map((publicationInfo) => (
					<PublicationDetail key={publicationInfo.id} publicationInfo={publicationInfo} />
				))}
			</div>
		</section>
	);
};

export default Publications;
