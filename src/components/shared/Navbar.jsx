import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbarstyling.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
            <div className="container-fluid">
                <Link to="/personal-webpage/" className="navbar-brand">Eline Madsø</Link>
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse justify-content-end" + (menuOpen ? " show" : "")} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/personal-webpage/artwork" className="nav-link">Artwork</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/personal-webpage/projects" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/personal-webpage/aboutme" className="nav-link">About me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
