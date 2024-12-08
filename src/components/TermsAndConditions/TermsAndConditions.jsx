import React, { useState, useEffect, useRef } from "react";
import { LuAlarmClock } from "react-icons/lu";

const TermsAndConditions = ({ sections }) => {
    const [activeSection, setActiveSection] = useState("");
    const observerRef = useRef(null);
    const sectionRefs = useRef({});

    useEffect(() => {
        if (!sections || sections.length === 0) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0.2,
            }
        );

        sections.forEach((section) => {
            const element = sectionRefs.current[section.id];
            if (element) observerRef.current.observe(element);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [sections]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const id in sectionRefs.current) {
                const section = sectionRefs.current[id];
                if (
                    section.offsetTop <= scrollPosition &&
                    section.offsetTop + section.offsetHeight > scrollPosition
                ) {
                    setActiveSection(id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!sections || sections.length === 0) {
        return <div>No content available.</div>;
    }

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <div className="flex gap-8">
            {/* Sidebar - hidden on screens <800px */}
            <nav className="sticky top-8 h-fit w-36 flex-shrink-0 hidden lg:block">
                <ul className="flex flex-col gap-2">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <button
                                onClick={() => handleNavClick(section.id)}
                                className={`text-sm hover:text-gray-900 ${
                                    activeSection === section.id
                                        ? "text-gray-900 font-medium"
                                        : "text-gray-500"
                                }`}
                            >
                                {section.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Content - Adjust padding and remove border on small screens */}
            <div className="min-w-0 flex-1 lg:border-l border-gray-200 lg:pl-10 pl-4 pr-4">
                {sections.map((section) => (
                    <section
                        key={section.id}
                        id={section.id}
                        ref={(el) => (sectionRefs.current[section.id] = el)}
                        className="scroll-mt-8 my-20 first:mt-0 last:mb-0"
                    >
                        <div className="mb-8">
                            <div className="mb-4">
                                <p className="body-large color-golden">
                                    {section.tag}
                                </p>
                                <h2 className="heading-5 w-700 my-2">
                                    {section.title}
                                </h2>
                                {section.lastUpdated && (
                                    <p className="body-large color-golden flex items-center gap-2 my-4">
                                        {section.icon}
                                        <span>
                                            Last updated: {section.lastUpdated}
                                        </span>
                                    </p>
                                )}
                            </div>
                            <div className="space-y-4 text-gray-600">
                                {section.content}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

TermsAndConditions.defaultProps = {
    sections: [
        {
            id: "school-policy",
            title: "School Policy",
            tag: "OUR GUIDELINES",
            lastUpdated: "May 26, 2023",
            icon: <LuAlarmClock size={20} />,
            content: (
                <div className="flex flex-col gap-4">
                    <p className="my-4">
                        As students, have agreed in the school registration,
                        school will provide a fair and healthy environment for
                        students. Students should learn dancing skills, beauty,
                        confidence, respect, and responsibility.
                    </p>
                    <ul className="ml-6 list-disc space-y-4">
                        <li>
                            Students must complete required class hours before
                            moving up to the next level - except in some special
                            cases which approved by the school
                        </li>
                        <li>
                            Students must register before attending any class
                        </li>
                        <li>
                            Students must wear the school-required leotard and
                            ballet shoes in class
                        </li>
                        <li>
                            Students have a required hair style in class. Hair
                            must be tied into a ballet bun in the back, with no
                            hair around the face
                        </li>
                        <li>
                            Students should arrive on time. It is recommended to
                            arrive at least 5-10 minutes early to get ready.
                            Those who come to class late must wait on the side
                            of the classroom until the teacher signals you in
                        </li>
                        <li>Students should not wear jewelry to class</li>
                        <li>
                            Students should remain quiet while the teacher is
                            talking in class
                        </li>
                        <li>
                            Students should not make noise, speak loudly, or
                            play/run in the classroom and hallway - especially
                            along any glass window in the school
                        </li>
                        <li>
                            Students should turn off their cell phones during
                            class - not just put it on just silent/vibrate
                        </li>
                        <li>
                            No videos or pictures may be taken in class without
                            explicit permission from the class teacher or school
                        </li>
                        <li>
                            Students always stay in their respective class. If
                            you need leave early, please get permission from
                            your class teacher
                        </li>
                        <li>
                            Students should keep the school area clean. No
                            littering.
                        </li>
                        <li>
                            Students should not bring any valuable personal
                            items to school or leave them in the dressing room.
                            The school will not be held responsible for
                            students' personal items.
                        </li>
                        <li>
                            No food or drink (except water) allowed in the
                            changing room and classroom.
                        </li>
                        <li>Be courteous and respectful.</li>
                    </ul>
                </div>
            ),
        },
        {
            id: "liability-agreement",
            title: "Liability Agreement",
            tag: "WAIVER",
            content: (
                <div className="flex flex-col gap-8">
                    <p className="mt-4">
                        No liability is assumed by Morningstar Dance Academy of
                        Atlanta for accidents caused by acts of person or
                        persons on the premises in the capacity of student,
                        account holder, parent, guardian, or guest. Person
                        hereinafter signing contract on behalf of registering
                        student assumes responsibility for actions of said
                        student.
                    </p>
                    <p>
                        My child (under 18 years of age) has permission to
                        participate in dance classes and all other functions as
                        a student duly registered in Morningstar Dance Academy
                        of Atlanta. My child is in good health and has my
                        physician's approval to participate. I understand I am
                        responsible for dropping off and promptly picking up my
                        child at the end of their class. I understand that my
                        child will not be supervised outside of the classroom;
                        therefore MorningStar Dance Academy of Atlanta will not
                        be held responsible for my child welfare.
                    </p>
                    <p>
                        I understand there are no waivers, discounts, refunds or
                        credits for any missed classes due to schedule conflict,
                        withdrawals, terminations, or illnesses. Exceptions can
                        be made with a 3+ week prior written notice. Tuition
                        will due the first week of student' class start (include
                        all class opened in the school). A late fee of $100 will
                        be charged to the student's account, if any tuition
                        payment is more than 15 days later after due day.
                    </p>
                    <p>
                        I understand we must follow school regulations and
                        requirements at all times when my child is in the dance
                        school and class.
                    </p>
                    <p>
                        I authorize the MorningStar Dance Academy of Atlanta to
                        obtain, store, and/or use (without payment) any
                        photographs, slides, and /or videotapes of my child
                        (mine) for public relation, marketing/advertising,
                        and/or class training.
                    </p>
                </div>
            ),
        },
    ],
};

export default TermsAndConditions;
