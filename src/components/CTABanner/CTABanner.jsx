import React from "react";
import "./CTABanner.scss";

// image imports
import ratingStars from "../../images/rating-stars.svg";

const CTABanner = () => {
    return (
        <div className="cta-banner">
            <h2 className="heading-1 w-700">Begin Your Journey</h2>
            <p className="body-regular text-[#9CA3AF]">
                Join our prestigious dance academy and discover your artistic
                potential. Contact us to schedule your first class or learn more
                about our programs.
            </p>
            {/* ratings */}
            <div className="cta-banner__ratings">
                <img src={ratingStars} alt="Rating Stars" />
                <p className="body-large color-grey-dark">4.9 Rating</p>
            </div>

            <a href="/contact" className="btn btn-primary-golden">
                Enroll Now
            </a>
        </div>
    );
};

export default CTABanner;
