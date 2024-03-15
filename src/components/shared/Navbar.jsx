import {Link} from "react-router-dom";
import React from "react";

const Navbar = () => {
    return(
        <nav>
            <div className="navbar-container">
                <div className="myName">
                    <Link to="personal-webpage/">Eline Madsø</Link>
                </div>

                <ul>
                    <li>
                        <Link to="personal-webpage/gallery">Painting gallery</Link>
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
    )
}
export default Navbar;