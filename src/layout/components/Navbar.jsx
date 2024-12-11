import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-black to-blue-900 px-5 md:px-20">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/publications">Publications</NavLink></li>
            <li><NavLink to="/ongoing-projects">Ongoing Projects</NavLink></li>
            <li><NavLink to="/team">Meet with the Team</NavLink></li>
            <li><NavLink to="/latest">Latest in BNLP</NavLink></li>
          </ul>
        </div>
        <a className="text-4xl font-bold text-[#00df9a]">BARTA</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6 text-xl text-white">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/publications">Publications</NavLink></li>
          <li><NavLink to="/ongoing-projects">Ongoing Projects</NavLink></li>
          <li><NavLink to="/team">Meet with the Team</NavLink></li>
          <li><NavLink to="/latest">Latest in BNLP</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
