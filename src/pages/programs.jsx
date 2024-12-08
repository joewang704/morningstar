// ProgramsPage.js

import React from "react";
import "../styles/programs.scss";

// component imports
import Navbar from "../components/Navbar/Navbar";
import Accordion from "../components/Accordion/Accordion";
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
            </div>

            <div className="programs__body padding">
                <div className="boxed">
                    {programsData.map((program, index) => (
                        <div
                            className="programs__section"
                            key={index}
                            id={program.programDetails.id}
                        >
                            <div className="programs__section__program-details">
                                <p className="level-tag body-large w-700">
                                    {program.programDetails.levelTag}
                                </p>
                                <img
                                    className="programs__section__program-details__img"
                                    src={program.programDetails.imgSrc}
                                    alt={program.programDetails.imgAlt}
                                />
                                <h1 className="heading-1 w-700">
                                    {program.programDetails.title}
                                </h1>
                                <p className="body-regular">
                                    {program.programDetails.description}
                                </p>
                                <a
                                    href={program.programDetails.buttonLink}
                                    className="btn btn-primary-golden"
                                >
                                    {program.programDetails.buttonText}
                                </a>
                            </div>
                            <div className="programs__section__program-levels">
                                <Accordion data={program.programLevels} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
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
