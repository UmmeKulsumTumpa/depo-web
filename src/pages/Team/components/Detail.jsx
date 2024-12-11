import PropTypes from "prop-types";
import { MdOutlineMail } from "react-icons/md";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Detail = ({ user }) => {
	if (!user || !user.image) {
		return null;
	}

	return (
		<div>
			<div
				className="max-w-sm mx-auto bg-white border-2 border-blue-900 rounded-lg overflow-hidden flex cursor-pointer"
				style={{ height: '300px', width: '500px', display: 'flex', alignItems: 'flex-start' }}
			>
				<div className="flex-shrink-0 p-4">
					<img
						src={user.image}
						alt={user.name || 'Profile Image'}
						className="w-48 h-48 object-cover rounded-xl"
					/>
					<p className="text-center text-gray-700 mt-2 font-italic">{user.role}</p>
				</div>
				<div className="p-4 flex-grow flex flex-col justify-between" style={{ overflow: 'hidden' }}>
					<div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
						<div style={{ flexGrow: 1 }}>
							<h2 className="text-lg leading-tight font-medium text-black mb-1"
								style={{ overflow: 'visible', whiteSpace: 'normal' }}>
								{user.name}
							</h2>
							<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1"
								style={{ overflow: 'visible', whiteSpace: 'normal' }}>
								{user.position}
							</div>
							<p className="text-gray-500"
								style={{ flexGrow: 1, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>
								{user.workplace}
							</p>
						</div>
					</div>
					<div className="flex gap-2 items-center justify-start mt-2">
						<a href={`mailto:${user.email}`} className="text-blue-600 hover:underline">
							<MdOutlineMail className="text-lg" />
						</a>
						<a href={user.googleScholar} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
							<FaGoogleScholar />
						</a>
						<a href={user.github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
							<FaGithub />
						</a>
						<a href={user.linkedin} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Detail.propTypes = {
	user: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string,
		workplace: PropTypes.string,
		position: PropTypes.string,
		email: PropTypes.string,
		googleScholar: PropTypes.string,
		github: PropTypes.string,
		linkedin: PropTypes.string,
		role: PropTypes.string,
	}),
};

export default Detail;
