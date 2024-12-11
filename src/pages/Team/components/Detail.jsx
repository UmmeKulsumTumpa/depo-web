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
    <div className="bg-white border-2 border-blue-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="flex flex-col sm:flex-row">
        {/* Profile Image and Role */}
        <div className="flex-shrink-0 p-4 flex flex-col items-center">
          <img
            src={user.image}
            alt={user.name || "Profile Image"}
            className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-xl"
          />
          {/* Redesigned Role */}
          <p className="mt-4 text-center text-sm sm:text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded-lg shadow-lg transition-colors duration-300">
            {user.role}
          </p>
        </div>
        {/* User Details */}
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div className="flex-grow">
            <h2 className="text-lg sm:text-xl font-medium text-black mb-1 break-words">
              {user.name}
            </h2>
            <div className="uppercase tracking-wide text-sm sm:text-base text-indigo-500 font-semibold mb-1 break-words">
              {user.position}
            </div>
            <p className="text-gray-500 flex-grow">
              {user.workplace}
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            {user.email && (
              <a
                href={`mailto:${user.email}`}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                aria-label="Email"
              >
                <MdOutlineMail className="text-2xl" />
              </a>
            )}
            {user.googleScholar && (
              <a
                href={user.googleScholar}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
              >
                <FaGoogleScholar className="text-2xl" />
              </a>
            )}
            {user.github && (
              <a
                href={user.github}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
            )}
            {user.linkedin && (
              <a
                href={user.linkedin}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            )}
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
