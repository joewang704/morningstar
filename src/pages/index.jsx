import * as React from "react";
import "../styles/home.scss";

// component imports
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CTABanner from "../components/CTABanner/CTABanner";
import ImageSlider from "../components/ImageSlider/ImageSlider";

// image imports
// director section
import directorImage from "../images/home/director-img.webp";

// programs section
import program1 from "../images/home/young-program-illustration.webp";
import program2 from "../images/home/intermediate-program-illustration.webp";
import program3 from "../images/home/advanced-program-illustration.webp";

// data imports
import { competitionData, successStories } from "../constants/home";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "gatsby";
import ScrollingTestimonials from "../components/Testimonials/Testimonials";
import { ShootingStars } from "../components/ShootingStars/ShootingStars";

const IndexPage = () => {
    return (
        <main className="home">
            <header className="home__header relative">
                <Navbar />

                {/* Shooting Stars */}
                <ShootingStars />
                {/* Hero */}
                <section className="home__hero padding">
                    <div className="boxed">
                        <div className="home__hero__content">
                            <h1 className="heading-1 w-800">
                                Morning Stars 2024 <br /> Annual Recital
                            </h1>
                            <p className="body-regular color-grey">
                                Come join us in celebrating our 20 year
                                anniversary! Tickets available for purchase now.
                            </p>
                            <a
                                href="/contact"
                                className="btn btn-primary-golden"
                            >
                              GET STARTED
                            </a>

                            <div className="home__hero__content__stats">
                                <div className="home__hero__content__stats__item">
                                    <p className="heading-6 w-700 color-golden">
                                        20+
                                    </p>
                                    <p className="body-regular w-500 color-grey">
                                        Ivy League Admissions
                                    </p>
                                </div>
                                <div className="home__hero__content__stats__item">
                                    <p className="heading-6 w-700 color-golden">
                                        100+
                                    </p>
                                    <p className="body-regular w-500 color-grey">
                                        Competition Top 12
                                    </p>
                                </div>
                                <div className="home__hero__content__stats__item">
                                    <p className="heading-6 w-700 color-golden">
                                        20+
                                    </p>
                                    <p className="body-regular w-500 color-grey">
                                        Years of Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="home__hero__slider">
                            <ImageSlider />
                        </div>
                    </div>
                </section>
            </header>

            {/* Director intro */}
            <section className="home__director padding">
                <div className="boxed">
                    <div className="home__director__image">
                        <img src={directorImage} alt="Director" />
                    </div>
                    <div className="home__director__content">
                        <div className="flex flex-col gap-2">
                            <p className="body-large color-golden">MEET OUR</p>
                            <h2 className="heading-1 w-700">
                                Artistic Director
                            </h2>
                        </div>
                        <div className="home__director__content__quote">
                            <p className="body-xl">
                                "Embarking on this journey, I envisioned a
                                sanctuary where passion meets technique, where
                                dreams take flight through the graceful art of
                                ballet. With each step, we strive to nurture
                                talent, inspire creativity, and illuminate the
                                stage with the brilliance of our dancers'
                                performances."
                            </p>
                            <div className="home__director__content__quote__author">
                                <p className="body-xl w-500">-Chen Xiao</p>
                                <div className="seperator-verticle"></div>
                                <p className="body-xs w-500 color-golden">
                                    Artistic Director
                                </p>
                            </div>
                        </div>
                        <a href="/team" className="btn btn-primary-golden">
                            READ MORE
                        </a>
                    </div>
                </div>
            </section>

            {/* programs section */}
            <section className="home__programs padding">
                <div className="boxed">
                    <div className="home__programs__list">
                        {/* Young Dancer Program */}
                        <Link
                            to="/programs/#program-beginner"
                            className="home__programs__list__item item-1"
                        >
                            <div className="flex flex-col gap-2 mb-4">
                                {" "}
                                <p className="body-large color-golden">
                                    OUR PROGRAMS
                                </p>
                                <h1 className="heading-1 w-700">
                                    Programs We Offer
                                </h1>
                            </div>
                            <div className="home__programs__list__item__header">
                                <h3 className="heading-3 w-600">
                                    Young Dancer Program
                                </h3>
                                <MdOutlineArrowOutward className="home__programs__list__item__header__icon" />
                            </div>
                            <p className="body-large">
                                Empowering kids with dance: building body
                                awareness, rhythm, flexibility, and confidence
                                through ballet.
                            </p>
                            <img
                                className="home__programs__list__item__img"
                                src={program1}
                                alt="Young Dancer Program"
                            />
                        </Link>

                        {/* Intermediate Dancer Program */}
                        <Link
                            to="/programs/#program-intermediate"
                            className="home__programs__list__item item-2"
                        >
                            <div className="home__programs__list__item__header">
                                <h3 className="heading-3 w-600">
                                    Intermediate Dancer Program{" "}
                                </h3>
                                <MdOutlineArrowOutward className="home__programs__list__item__header__icon" />
                            </div>
                            <p className="body-large">
                                Focusing on posture, technique, barre use, and
                                contemporary dance.
                            </p>
                            <img
                                className="home__programs__list__item__img"
                                src={program2}
                                alt="Young Dancer Program"
                            />
                        </Link>

                        {/* Advanced Dancer Program */}
                        <Link
                            to="/programs/#program-advanced"
                            className="home__programs__list__item item-3"
                        >
                            <div className="home__programs__list__item__header">
                                <h3 className="heading-3 w-600">
                                    Advanced Dancer Program
                                </h3>
                                <MdOutlineArrowOutward className="home__programs__list__item__header__icon" />
                            </div>
                            <p className="body-large">
                                Intense, fast-paced dance classes across all
                                styles of dance.Includes our pre-professional
                                class.
                            </p>
                            <img
                                className="home__programs__list__item__img"
                                src={program3}
                                alt="Young Dancer Program"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* competitions */}
            <section className="home__competitions padding">
                <div className="boxed">
                    <div className="home__competitions__header">
                        <h2 className="body-large color-golden">PROGRAMS</h2>
                        <h1 className="heading-1 w-700">Competitions</h1>
                    </div>

                    <div className="home__competitions__logos">
                        <div className="home__competitions__row">
                            {competitionData
                                .slice(0, 5)
                                .map((competition, index) => (
                                    <div className="home__competitions__card">
                                        <img
                                            loading="lazy"
                                            src={competition.src}
                                            alt={competition.alt}
                                            className={
                                                "home__competitions__image"
                                            }
                                        />
                                    </div>
                                ))}
                        </div>
                        <div className="home__competitions__divider" />
                        <div className="home__competitions__row">
                            {competitionData
                                .slice(5)
                                .map((competition, index) => (
                                    <div className="home__competitions__card">
                                        <img
                                            loading="lazy"
                                            src={competition.src}
                                            alt={competition.alt}
                                            className={
                                                "home__competitions__image"
                                            }
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* success stories */}
            <section className="home__success padding">
                <div className="boxed">
                    <div className="flex flex-col gap-1">
                        <h2 className="body-large color-golden">ALUMNI</h2>
                        <h1 className="heading-1 w-700">Our Success Stories</h1>
                    </div>
                    <div className="home__success__logos">
                        {successStories.map((logo) => (
                            <img
                                className="home__success__logos__img"
                                src={logo.src}
                                alt={logo.alt}
                                key={logo.alt}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* testimonials */}
            <section className="home__testimonials relative">
                <ShootingStars />
                <ScrollingTestimonials />
            </section>

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

export default IndexPage;

export const Head = () => <title>Home Page</title>;
