import React from "react";
import "../styles/terms.scss";

// custom components
import Navbar from "../components/Navbar/Navbar";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import Footer from "../components/Footer/Footer";

const TermsPage = () => {
    return (
        <main className="terms">
            <header className="terms__header">
                <Navbar />
                <section className="terms__hero padding">
                    <div className="boxed">
                        <h2 className="body-large color-golden">OUR POLICY</h2>
                        <h1 className="heading-1">Terms & Conditions</h1>
                    </div>
                </section>
            </header>

            <section className="terms__body padding">
                <div className="boxed">
                    <TermsAndConditions />
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TermsPage;
