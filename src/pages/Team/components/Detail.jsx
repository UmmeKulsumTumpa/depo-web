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
    <div className="flex justify-center p-4">
      <div
        className="
          max-w-sm
          w-full
          sm:w-[500px]
          h-auto
          bg-white
          border-2
          border-blue-900
          rounded-lg
          overflow-hidden
          flex
          flex-col
          cursor-pointer
          shadow-md
        "
      >
        <div className="flex flex-col sm:flex-row">
          <div className="flex-shrink-0 p-4 flex flex-col items-center">
            <img
              src={user.image}
              alt={user.name || "Profile Image"}
              className="w-48 h-48 object-cover rounded-xl"
            />
            {/* Redesigned Role */}
            <p className="text-center text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded-lg shadow-lg mt-4">
  {user.role}
</p>


          </div>
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div className="flex-grow flex flex-col justify-between">
              <div className="flex-grow">
                <h2
                  className="
                    text-lg
                    leading-tight
                    font-medium
                    text-black
                    mb-1
                    break-words
                  "
                >
                  {user.name}
                </h2>
                <div
                  className="
                    uppercase
                    tracking-wide
                    text-sm
                    text-indigo-500
                    font-semibold
                    mb-1
                    break-words
                  "
                >
                  {user.position}
                </div>
                <p
                  className="
                    text-gray-500
                    flex-grow
                    overflow-hidden
                    text-ellipsis
                    line-clamp-5
                  "
                >
                  {user.workplace}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center justify-start mt-4">
              <a
                href={`mailto:${user.email}`}
                className="text-blue-600 hover:underline transition-colors duration-300"
              >
                <MdOutlineMail className="text-lg" />
              </a>
              <a
                href={user.googleScholar}
                className="text-blue-600 hover:underline transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogleScholar />
              </a>
              <a
                href={user.github}
                className="text-blue-600 hover:underline transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href={user.linkedin}
                className="text-blue-600 hover:underline transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
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
