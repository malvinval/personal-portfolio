import { Link } from "react-router-dom";

const NavLinks = () => {
    const element = (
        <>
            <li><Link className="bg-transparent z-50" to={"/"}>Home</Link></li>
            <li><Link className="bg-transparent z-50" to={""}>About</Link></li>
            <li><Link className="bg-transparent z-50" to={""}>Experiences</Link></li>
            <li><Link className="bg-transparent z-50" to={""}>Projects</Link></li>
            <li><Link className="bg-transparent z-50" to={""}>Achievements</Link></li>
        </>
    );

    return element;
}

export default NavLinks;