import React, { useState } from "react";
import "../styles/team.scss";

// custom components
import Navbar from "../components/Navbar/Navbar";
import CTABanner from "../components/CTABanner/CTABanner";
import Footer from "../components/Footer/Footer";

// icons
import { BsInfoCircleFill } from "react-icons/bs";

// data imports
import teamData from "../constants/team";
import { IoCloseCircle } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const TeamPage = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    // Function to open the modal with selected team member
    const openModal = (member) => {
        setSelectedMember(member);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedMember(null);
    };

    return (
        <main className="team">
            <Navbar />
            <div className="team__body padding">
                <div className="boxed">
                    <div className="team__header">
                        <h2 className="body-large color-golden">Our Faculty</h2>
                        <h1 className="heading-1">Meet the team</h1>
                    </div>
                    <section className="team__list">
                        {teamData.map((member) => (
                            <div className="team__list__item" key={member.name}>
                                <div className="team__list__item__image">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="team__list__item__image-img"
                                    />
                                </div>
                                <div className="team__list__item__content">
                                    <div className="team__list__item__header">
                                        <h3 className="heading-5">
                                            {member.name}
                                        </h3>
                                        <p className="body-large text-[#8e724d]">
                                            {member.role}
                                        </p>
                                    </div>
                                    <div className="body-small">
                                        <span className="text-content">
                                            {member.intro}
                                        </span>
                                    </div>

                                    <div className="team__list__item__content__action">
                                        <button
                                            className="btn btn-primary-link"
                                            onClick={() => openModal(member)}
                                        >
                                            <span className="text">
                                                View Details
                                            </span>
                                            <FaArrowRight
                                                size={20}
                                                className="icon"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>

            {/* CTA */}
            <div className="team__cta padding">
                <div className="boxed">
                    <CTABanner />
                </div>
            </div>

            <Footer />

            {/* Modal for selected team member */}
            {selectedMember && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="team__list__item modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <IoCloseCircle
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white bg-black h-6 w-6 rounded-full"
                            size={20}
                        />
                        <div className="team__list__item__image">
                            <img
                                src={selectedMember.image}
                                alt={selectedMember.name}
                                className="team__list__item__image-img"
                            />
                        </div>
                        <div className="team__list__item__content">
                            <div className="team__list__item__header">
                                <h3 className="heading-5">
                                    {selectedMember.name}
                                </h3>
                                <p className="body-large text-[#8e724d]">
                                    {selectedMember.role}
                                </p>
                            </div>
                            <div className="">
                                <span className="text-content">
                                    {selectedMember.intro}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default TeamPage;
