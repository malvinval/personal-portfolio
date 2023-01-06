import { Link } from "react-router-dom";

const NavLinks = () => {
    const element = (
        <>
            <li><Link className="bg-transparent" to={"/"}>Home</Link></li>
            <li><Link className="bg-transparent" to={""}>About</Link></li>
            <li><Link className="bg-transparent" to={""}>Experiences</Link></li>
            <li><Link className="bg-transparent" to={""}>Projects</Link></li>
            <li><Link className="bg-transparent" to={""}>Achievements</Link></li>
        </>
    );

    return element;
}

export default NavLinks;