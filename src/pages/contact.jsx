import React from "react";
import "../styles/contact.scss";

// custom components
import Navbar from "../components/Navbar/Navbar";

// images and icons
import { MdOutlinePhone, MdMailOutline } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

import xiao from "../images/xiao.webp";

import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

// Import ToastContainer for global toast notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
    return (
        <main className="contact">
            {/* Global ToastContainer */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={true}
                closeOnClick
                theme="dark" // sets the base theme to dark mode
                toastStyle={{
                    backgroundColor: "#000", // Black background
                    color: "#fff", // White text
                    border: "1px solid rgba(255, 255, 255, .2)", // Optional: White border for contrast
                }}
            />
            <header className="contact__header">
                <Navbar />
                <section className="contact__hero padding">
                    <div className="boxed">
                        <h2 className="body-large color-golden">CONTACT</h2>
                        <h1 className="heading-1">Enroll With Us</h1>
                    </div>
                </section>
            </header>

            <section className="contact__body padding">
                <div className="boxed">
                    <div className="relative">
                        <div className=" flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <MdOutlinePhone />
                                <a
                                    className="body-regular"
                                    href="tel:+16785163026"
                                >
                                    678-516-3026 / 678-471-9666
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <MdMailOutline />
                                <a
                                    className="body-regular"
                                    href="mailto:info.msda@morningstardance.com"
                                >
                                    info.msda@morningstardance.com
                                </a>
                            </div>
                            <div className="contact__body__socials-icons">
                                <a
                                    href="https://www.facebook.com/p/MorningStar-Dance-Academy-of-Atlanta-100063484392822/"
                                    className="contact__body__socials-icon"
                                    aria-label="Visit our Facebook page"
                                    target="_blank"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.youtube.com/@morningstardance"
                                    className="contact__body__socials-icon"
                                    aria-label="Visit our Twitter page"
                                    target="_blank"
                                >
                                    <FaYoutube />
                                </a>
                                <a
                                    href="https://www.instagram.com/morningstardance/?hl=en"
                                    className="contact__body__socials-icon"
                                    aria-label="Visit our Instagram page"
                                    target="_blank"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    href="https://www.xiaohongshu.com/user/profile/573b0a1f6a6a6957f424d0ce?xhsshare=CopyLink&appuid=5c3ee27c000000000600e432&apptime=1731368962"
                                    className="contact__body__social-icon-special"
                                    aria-label="Visit our Instagram page"
                                    target="_blank"
                                >
                                    <img src={xiao} />
                                </a>
                            </div>
                            {/* Contact Form  */}
                            <div className="contact__body__form-wrapper">
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                    <iframe
                        className="contact__body__map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.3357589953084!2d-84.18696498823795!3d34.0352573730515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f598b4c3970a95%3A0xed88a4c66cc19725!2sMorningStar%20Dance%20Academy%20of%20Atlanta!5e0!3m2!1sen!2s!4v1731158797284!5m2!1sen!2s"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;
