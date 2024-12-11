import PropTypes from "prop-types";

const PublicationDetail = ({ publicationInfo }) => {
	const { title, authors, publishedIn, pdf, code } = publicationInfo;

	return (
		<div className="bg-gray-100 shadow-lg p-6 rounded-lg">
			<h2 className="text-xl font-bold mb-1">{title}</h2>
			<p className="text-gray-500 mb-2">{authors}</p>
			<p>{publishedIn}</p>
			<div className="mt-5">
				<div className="flex items-center gap-2">
					<h4 className="font-medium">Publication PDF:</h4>
					<a
						href={pdf}
						className="text-blue-500 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						View PDF
					</a>
				</div>
				<div className="flex items-center gap-2 mt-2">
					<h4 className="font-medium">Related Codebase:</h4>
					<a
						href={code}
						className="text-blue-500 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						View Code
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
