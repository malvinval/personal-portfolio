import { Link } from "react-router-dom";

const NavLinks = () => {
    const element = (
        <>
            <li><Link className="bg-transparent z-50" to={"/"}>Home</Link></li>
            <li><Link className="bg-transparent z-50" to={"/about"}>About</Link></li>
            <li><Link className="bg-transparent z-50" to={"/experiences"}>Experiences</Link></li>
            <li><Link className="bg-transparent z-50" to={"/achievements"}>Certifications and Achievements</Link></li>
        </>
    );

    return element;
}

export default NavLinks;