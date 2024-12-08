import React from "react";
import "./Footer.scss"; // Importing the SCSS file for styles

// image imports
import brandLogo from "../../images/brand-logo.webp";
import { MdMailOutline, MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import xiao from "../../images/xiao.webp";

// Links data
const sitemapLinks = [
    { label: "Homepage", href: "/" },
    { label: "Our Story", href: "/story" },
    { label: "Programs", href: "/programs" },
    {
        label: "Portal",
        href: "https://app.thestudiodirector.com/morningstardanceacademy/portal.sd",
    },
];

const otherLinks = [
    { label: "Team", href: "/team" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
    { label: "Waiver", href: "/terms" },
];

const Footer = () => {
    return (
        <div className="footer padding">
            <div className="footer__boxed">
                <div className="footer__top">
                    <div className="footer__column footer__column--contact">
                        <div className="footer__logo">
                            <img
                                loading="lazy"
                                src={brandLogo}
                                alt="Morning Star Dance Academy Logo"
                                className="footer__logo-img"
                            />
                        </div>
                        <div className="footer__contact-info">
                            <div className="footer__contact-item">
                                <MdMailOutline />
                                <a
                                    href="mailto:info.msda@morningstardance.com"
                                    className="body-regular"
                                >
                                    info.msda@morningstardance.com
                                </a>
                            </div>
                            <div className="footer__contact-item">
                                <MdPhone />
                                <a
                                    href="tel:+16785163026"
                                    className="body-regular"
                                >
                                    678-516-3026 / 678-471-9666
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__column footer__column--sitemap">
                        <h2 className="footer__column-title text-large w-500">
                            Sitemap
                        </h2>
                        <ul className="footer__nav-list">
                            {sitemapLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className="footer__nav-item body-small"
                                >
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer__column footer__column--other">
                        <h2 className="footer__column-title body-large w-500">
                            Other
                        </h2>
                        <ul className="footer__nav-list">
                            {otherLinks.map((link, index) => (
                                <li
                                    key={index}
                                    className="footer__nav-item body-small"
                                >
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__copyright body-small">
                        ©morningstardance 2024, All rights reserved.
                    </p>
                    <div className="footer__social-icons">
                        <a
                            href="https://www.facebook.com/p/MorningStar-Dance-Academy-of-Atlanta-100063484392822/"
                            className="footer__social-icon"
                            aria-label="Visit our Facebook page"
                            target="_blank"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://www.youtube.com/@morningstardance"
                            className="footer__social-icon"
                            aria-label="Visit our Youtube Channel"
                            target="_blank"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://www.instagram.com/morningstardance/?hl=en"
                            className="footer__social-icon"
                            aria-label="Visit our Instagram page"
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.xiaohongshu.com/user/profile/573b0a1f6a6a6957f424d0ce?xhsshare=CopyLink&appuid=5c3ee27c000000000600e432&apptime=1731368962"
                            className="footer__social-icon-special"
                            aria-label="Visit our Instagram page"
                            target="_blank"
                        >
                            <img src={xiao} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
