import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <div className="navbar-container">
                <ul>
                    <li>
                        <Link to="/gallery">Painting gallery</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/aboutme">About me</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}
export default Navbar;