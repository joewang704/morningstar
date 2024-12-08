import React from "react";
import "../styles/gallery.scss";

// custom components
import Navbar from "../components/Navbar/Navbar";
import PaginatedGrid from "../components/PaginatedGalleryGrid/PaginatedGalleryGrid";
import Footer from "../components/Footer/Footer";
import CTABanner from "../components/CTABanner/CTABanner";

import galleryData from "../constants/gallery";

const GalleryPage = () => {
    return (
        <main className="gallery">
            <Navbar />

            <div className="gallery__body padding">
                <div className="boxed">
                    <div className="gallery__body__top">
                        <p className="body-large color-golden">OUR GALLERY</p>
                        <h1 className="heading-1 w-700">Our Gallery</h1>
                    </div>
                    <div className="gallery__wrapper">
                        <PaginatedGrid data={galleryData} />
                    </div>
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

export default GalleryPage;
