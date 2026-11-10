// ProgramsPage.js

import React from "react";
import "../styles/programs.scss";

// component imports
import Navbar from "../components/Navbar/Navbar";
import CTABanner from "../components/CTABanner/CTABanner";
import Footer from "../components/Footer/Footer";

// data import
import programsData from "../constants/programs";

const ProgramsPage = () => {
    return (
        <main className="programs">
            <Navbar />

            <div className="programs__header padding">
                <h2 className="body-large color-golden">OUR PROGRAMS</h2>
                <h1 className="heading-1">Our Programs</h1>
                <p className="body-regular programs__header__subtitle">
                    Discover a path that matches your age, experience, and goals — from your very
                    first class to the competition stage.
                </p>
            </div>

            <div className="programs__body padding">
                <div className="boxed">
                    <div className="programs__grid">
                        {programsData.map((program) => (
                            <div className="programs__card" key={program.id} id={program.id}>
                                <div className="programs__card__image-wrap">
                                    <img
                                        className="programs__card__image"
                                        src={program.imgSrc}
                                        alt={program.imgAlt}
                                    />
                                </div>
                                <div className="programs__card__body">
                                    <h3 className="programs__card__title w-700">
                                        {program.title}
                                    </h3>
                                    <p className="body-regular programs__card__description">
                                        {program.description}
                                    </p>
                                    <ul className="programs__card__highlights">
                                        {program.highlights.map((highlight, i) => (
                                            <li
                                                key={i}
                                                className="programs__card__highlights__tag body-regular"
                                            >
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="home__cta padding">
                <div className="boxed">
                    <CTABanner />
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default ProgramsPage;
