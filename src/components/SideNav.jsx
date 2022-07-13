import { Link } from "react-router-dom";

import { HiHome, HiChatAlt } from "react-icons/hi";
import { FaBriefcase, FaUser } from "react-icons/fa";

export default function sideNav({ currentPage }) {
  return (
    <nav className="side-navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={`link nav-link ${
              currentPage === "home" ? "active" : ""
            }`}
          >
            <HiHome className="link-icon" />
            <p className="link-text">Home</p>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`link nav-link ${
              currentPage === "projects" ? "active" : ""
            }`}
          >
            <FaBriefcase className="link-icon" />
            <p className="link-text">Projects</p>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`link nav-link ${
              currentPage === "about" ? "active" : ""
            }`}
          >
            <FaUser className="link-icon" />
            <p className="link-text">About Me</p>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`link nav-link ${
              currentPage === "contact" ? "active" : ""
            }`}
          >
            <HiChatAlt className="link-icon" />
            <p className="link-text">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
