import PropTypes from "prop-types";

const PublicationDetail = ({ publicationInfo }) => {
	const { title, authors, publishedIn, pdf, code } = publicationInfo;

	return (
		<div className="bg-gray-100 shadow-lg p-6 rounded-lg">
			<h2 className="text-xl font-bold mb-1">{title}</h2>
			<p className="text-gray-500 mb-2">{authors}</p>
			<p>{publishedIn}</p>
			<div className="mt-5 text-">
				<div className="flex gap-2">
					<h4>Publication PDF: </h4>
					<a
						href="https://example.com"
						className="text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						{pdf}
					</a>
				</div>
				<div className="flex gap-2">
					<h4>Related Codebase: </h4>
					<a
						href="https://example.com"
						className="text-blue-500"
						target="_blank"
						rel="noopener noreferrer"
					>
						{code}
					</a>
				</div>
			</div>
		</div>
	);
};

PublicationDetail.propTypes = {
	publicationInfo: PropTypes.shape({
		title: PropTypes.string.isRequired,
		authors: PropTypes.string.isRequired,
		publishedIn: PropTypes.string.isRequired,
		pdf: PropTypes.string.isRequired,
		code: PropTypes.string.isRequired,
	}).isRequired,
};

export default PublicationDetail;
