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
		<div className="my-10 mx-[10%] h-screen w-4/5">
			<h1 className="text-3xl font-semibold pb-8 ml-[7%]">
				Publications
			</h1>
			<div className="mx-20">
				{publications.map((publicationInfo) => (
					<div key={publicationInfo.id} className="mb-4">
						<PublicationDetail publicationInfo={publicationInfo} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Publications;
