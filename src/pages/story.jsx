import React from "react";
import "../styles/story.scss";

// component imports
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CTABanner from "../components/CTABanner/CTABanner";

// image imports
import heroIllustration from "../images/story/story-hero-illustration.webp";
import storySection3 from "../images/story/story-section-3-illustration.webp";

const OurStoryPage = () => {
    return (
        <main className="story">
            <header className="story__header">
                <Navbar />

                <section className="story__hero padding">
                    <div className="boxed">
                        <div className="story__hero__top">
                            <h1 className="heading-1 w-700">Learn about us</h1>
                            <p className="body-xl">
                                Founded in 2004, MorningStar Dance Academy of
                                Atlanta (MSDA) offers high quality training in
                                classical ballet, pointe, contemporary dance,
                                jazz, character dance, Chinese traditional and
                                folk dance, and Kpop. 
                            </p>
                        </div>

                        <div className="story__hero__bottom">
                            <img
                                src={heroIllustration}
                                alt="hero illustration"
                            />
                            <p className="body-xl w-300 text-[#E5E7EB]">
                                The founder and artistic director of MSDA is Mr.
                                Chen Xiao, a former professional dancer with
                                almost thirty years of experience performing and
                                teaching and a recipient of the top award at
                                the International Ballet Competition in Osaka,
                                Japan. The Academy’s teaching methods offer
                                students an age- appropriate, challenging, and
                                enjoyable program that combines personal
                                enrichment with technical preparation for
                                professional work.
                            </p>
                        </div>
                    </div>
                </section>
            </header>

            {/* section 1 */}
            <section className="story__section-1 padding">
                <div className="boxed">
                    <h2 className="heading-4">
                        100+ <br />
                        Competitions Completed
                    </h2>
                    <p className="body-large w-500 font-manrope">
                        MSDA students have competed at various
                        regional, national and international dance competitions
                        including Youth America Grand Prix (YAGP), World Ballet
                        Competition (WBC), Universal Ballet Competition (UBC),
                        Valentina Kozlova International Ballet Competition,
                        American Dance Competition, American Ballet
                        Competition, National Ballet Competition, Showstopper,
                        International Dance Challenge, and Stage One National
                        Dance Competition. Students have also qualified and won
                        many top awards at various age groups from prestigious
                        professional ballet competitions, including Prix de
                        Lausanne, Helsinki International Ballet Competition, and
                        Beijing International Ballet and Choreography
                        Competition (IBCC). Past honors include Top Three and
                        the Hope award in YAGP regionals, 3rd place and the
                        “Shelly King Award” from YAGP international finals, 1st
                        place in WBC international finals, “Legend Award” and
                        “Rising Star Award” in UBC, prizewinners (bronze award
                        and special award) of IBCC. Besides recognitions
                        received for individual dancers, the Academy’s ensemble
                        pieces have also won multiple first places in YAGP, WBC,
                        UBC, ADC, and Showstopper etc. MSDA was invited to
                        perform its ensemble pieces “Jasmine” and “Water Lily”
                        in the YAGP International Final Gala in 2014 and 2020,
                        respectively. Consequently, students have received full
                        scholarships to many top professional ballet schools
                        such as American Ballet School, The Royal Ballet School,
                        Bolshoi Ballet Academy, English National Ballet,
                        Princess Grace Academy of Classical Dance, Boston Ballet
                        School, Ballet West, Joffrey Ballet School, and more.
                    </p>
                </div>
            </section>

            {/* section 2 */}
            <section className="story__section-2 padding">
                <div className="boxed">
                    <div className="story__section-2__left">
                        <h2 className="heading-4">
                            Experience <br /> Competition-Ready <br />{" "}
                            Performances
                        </h2>
                        <div className="story__section-2__stats">
                            <div className="story__section-2__stats__item">
                                <p className="heading-6 w-700 color-golden">
                                    20+
                                </p>
                                <p className="body-regular w-500 color-grey">
                                    Ivy League Admissions
                                </p>
                            </div>
                            <div className="story__section-2__stats__item">
                                <p className="heading-6 w-700 color-golden">
                                    100+
                                </p>
                                <p className="body-regular w-500 color-grey">
                                    Competition Top 12
                                </p>
                            </div>
                            <div className="story__section-2__stats__item">
                                <p className="heading-6 w-700 color-golden">
                                    20+
                                </p>
                                <p className="body-regular w-500 color-grey">
                                    Years of Experience
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="story__section-2__right">
                        <p className="body-large w-500 font-manrope">
                            MSDA students have competed at various
                            regional, national and international dance
                            competitions including Youth America Grand Prix
                            (YAGP), World Ballet Competition (WBC), Universal
                            Ballet Competition (UBC), Valentina Kozlova
                            International Ballet Competition, American
                            Dance Competition, American Ballet
                            Competition, National Ballet
                            Competition, Showstopper, International Dance
                            Challenge, and Stage One National Dance Competition.
                            Students have also qualified and won many top awards
                            at various age groups from prestigious professional
                            ballet competitions, including Prix de Lausanne,
                            Helsinki International Ballet Competition, and
                            Beijing International Ballet and Choreography
                            Competition (IBCC). Past honors include Top Three
                            and the Hope award in YAGP regionals, 3rd place and
                            the “Shelly King Award” from YAGP international
                            finals, 1st place in WBC international finals,
                            “Legend Award” and “Rising Star Award” in UBC,
                            prizewinners (bronze award and special award) of
                            IBCC. Besides recognitions received for individual
                            dancers, the Academy’s ensemble pieces have also won
                            multiple first places in YAGP, WBC, UBC, ADC, and
                            Showstopper etc. MSDA was invited to perform its
                            ensemble pieces “Jasmine” and “Water Lily” in the
                            YAGP International Final Gala in 2014 and 2020,
                            respectively. Consequently, students have
                            received full scholarships to many top professional
                            ballet schools such as American Ballet School, The
                            Royal Ballet School, Bolshoi Ballet Academy, English
                            National Ballet, Princess Grace Academy of Classical
                            Dance, Boston Ballet School, Ballet West, Joffrey
                            Ballet School, and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className="story__section-3 padding">
                <div className="boxed">
                    <img src={storySection3} alt="director" />
                    <h2 className="heading-5 w-700">
                        Masterpieces in Most Outstanding School Dance
                    </h2>
                    <p className="body-large w-500 font-marope">
                        Over the years, MSDA received the "Most Outstanding
                        School" award at the YAGP regional competition in 2014,
                        2017, 2018, 2020, 2022and 2023, and also at the WBC
                        finals in 2022 for its consistent superior quality in
                        performance.  Mr. Chen received the “Outstanding
                        Teacher” award in 2013, 2015, 2016, 2019, and 2021 from
                        YAGP regional for his dedication and special
                        contribution to ballet education, He was also awarded
                        “Outstanding Coach” by Universal Ballet Competition in
                        2016 and 2022. Another one of the Academy’s faculty,
                        Wynne Huo, received the “Best Choreographer”
                        award.  Subsequently, MSDA has become well known in the
                        nation.
                    </p>
                </div>
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

export default OurStoryPage;
