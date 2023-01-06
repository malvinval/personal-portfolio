import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
    const [fixed,setFixed] = React.useState(false);

    const scrollEffect = () => {
        window.onscroll = () => {
            if (window.scrollY > 50) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        };
    };

    React.useEffect(() => {
        scrollEffect();
    });

    const element = (    
        <div className={`${fixed ? 'fixed' : 'static'} navbar font-poppins bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-25 border border-gray-100`}>
            <div className="navbar-start p-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLinks />
                    </ul>
                </div>
                <Link className="hidden normal-case font-bold text-lg md:block">Malvin Valerian</Link>
                <Link className="block normal-case font-bold text-lg md:hidden">Malvin Val</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLinks />
                </ul>
            </div>

            <div className="navbar-end">
                <Link className="btn bg-gray-900">Resume</Link>
            </div>
        </div>
    );

    return element;
}

export default Navbar;