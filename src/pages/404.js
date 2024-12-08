import React from "react";
import { Link } from "gatsby";
import { FaHome, FaEnvelope, FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl shadow-2xl p-8 space-y-8">
                <div className="flex gap-2 items-center justify-center space-x-4">
                    <FaExclamationTriangle className="text-6xl text-white" />
                    <h1 className="text-7xl font-extrabold tracking-tighter">
                        404
                    </h1>
                </div>
                <h2 className="text-3xl font-semibold text-center">
                    Oops! Page Not Found
                </h2>
                <p className="text-xl text-center text-gray-400">
                    We've searched high and low, but it seems this page has
                    vanished into the digital void.
                </p>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link to="/" className="btn btn-primary-golden">
                        <FaHome className="text-xl" />
                        <span>Go Home</span>
                    </Link>
                    <Link to="/contact" className="btn btn-primary-white">
                        <FaEnvelope className="text-xl" />
                        <span>Contact Us</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;

export const Head = () => <title>404: Page Not Found</title>;
