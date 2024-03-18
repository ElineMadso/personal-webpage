import { Link } from "react-router-dom";
import React from "react";
import "./Navbarstyling.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <ul className="nav-links">
          <li>
            <Link to="personal-webpage/gallery">Painting gallery</Link>
          </li>

          <li className="myName">
            <Link to="personal-webpage/">Eline Madsø</Link>
          </li>

          <li>
            <Link to="personal-webpage/projects">Projects</Link>
          </li>
          <li>
            <Link to="personal-webpage/aboutme">About me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
