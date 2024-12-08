import React, { useState } from "react";
import { Link } from "gatsby"; // Using Gatsby's Link for routing
import "./Navbar.scss";
import navbrand from "../../images/brand-logo-icon.webp"; // Static image path
import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const toggleNavbar = () => setNavbar(!navbar);

    // Define the navigation links
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Programs", path: "/programs" },
        { name: "Our Story", path: "/story" },
        { name: "Team", path: "/team" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <div className="navbar">
            <header className="padding">
                <div className="boxed">
                    <div className="header-content">
                        <Link className="navbrand" to="/">
                            <img
                                src={navbrand}
                                alt="Logo"
                                className="navbrand-img"
                            />
                        </Link>
                        <div className="header-left">
                            {navLinks.map((link) => (
                                <Link
                                    to={link.path}
                                    className="nav-link"
                                    key={link.name}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="header-right">
                            <Link
                                to="/contact"
                                className="btn btn-primary-golden"
                            >
                                <span className="text">Enroll Now</span>
                            </Link>
                            <Link
                                to="https://app.thestudiodirector.com/morningstardanceacademy/portal.sd"
                                target="_blank"
                                className="btn btn-outlined-white"
                            >
                                <span className="text">Student Login</span>
                            </Link>
                        </div>
                        <div className="header-right-mob">
                            <div className="open-header" onClick={toggleNavbar}>
                                <MdMenu className="icon-MdMenu" size={25} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className="header-mob padding"
                style={{ display: navbar ? "block" : "none" }}
            >
                <div className="box">
                    <div className="header-mob-head padding">
                        <Link className="navbrand" to="/">
                            <img
                                src={navbrand}
                                alt="Logo"
                                className="navbrand-img"
                            />
                        </Link>
                        <div className="header-mob-head-right">
                            <div
                                className="close-header"
                                onClick={toggleNavbar}
                            >
                                <MdClose className="close-icon" size={25} />
                            </div>
                        </div>
                    </div>
                    <div className="header-mob-body">
                        {navLinks.map((link) => (
                            <Link
                                to={link.path}
                                className="nav-link"
                                key={link.name}
                                onClick={toggleNavbar}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" className="btn btn-primary-golden">
                            <span className="text">Enroll Now</span>
                        </Link>
                        <Link
                            to="https://app.thestudiodirector.com/morningstardanceacademy/portal.sd"
                            target="_blank"
                            className="btn btn-outlined-white"
                        >
                            <span className="text">Student Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
