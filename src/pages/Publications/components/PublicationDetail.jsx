import PropTypes from "prop-types";

const PublicationDetail = ({ publicationInfo }) => {
	const { title, authors, publishedIn, pdf, code } = publicationInfo;

	return (
		<article className="bg-gray-100 shadow-lg p-6 rounded-lg">
			<h2 className="text-xl sm:text-2xl font-bold mb-1 break-words">{title}</h2>
			<p className="text-gray-500 mb-2 break-words">{authors}</p>
			<p className="text-gray-700 mb-4 break-words">{publishedIn}</p>
			<div className="mt-5 space-y-2">
				<div className="flex items-center">
					<h4 className="font-medium w-40 sm:w-48">Publication PDF:</h4>
					<a
						href={pdf}
						className="text-blue-500 hover:underline break-words"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View Publication PDF"
					>
						View PDF
					</a>
				</div>
				<div className="flex items-center">
					<h4 className="font-medium w-40 sm:w-48">Related Codebase:</h4>
					<a
						href={code}
						className="text-blue-500 hover:underline break-words"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View Related Codebase"
					>
						View Code
					</a>
				</div>
			</div>
		</article>
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
