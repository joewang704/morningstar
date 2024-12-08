// programsData.js

import React from "react";
import { LuAlarmClock } from "react-icons/lu";

import youngDancerProgram from "../images/programs/young-dancer-program.webp";
import intermediateDancerProgram from "../images/programs/intermediate-program.webp";
import advancedDancerProgram from "../images/programs/advanced-dancer-program.webp";
import specialTrainingProgram from "../images/programs/special-training-program.webp";
import summerIntensiveProgram from "../images/programs/summer-intensive-program.webp";
import adultProgram from "../images/programs/adult-program.webp";

const programsData = [
    {
        programDetails: {
            id: "program-beginner",
            levelTag: "(Beginner - Level 3)",
            imgSrc: youngDancerProgram,
            imgAlt: "Dance Form",
            title: "Young Dancer Program",
            description: `Classes for kids combining movement and music to help students develop body awareness, rhythm, flexibility, coordination, and confidence while learning ballet vocabulary. Beginner is 1 class per week. Starting from Level 1, there will be Chinese Folk class in addition to ballet. Starting Level 3 classes will be TWICE a week, Chinese Folk only on the weekend.`,
            buttonText: "Join Now",
            buttonLink: "/contact",
        },
        programLevels: [
            {
                title: "Beginner",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description: "Beginner A: Saturday 12:45pm (1 hour)",
                    },
                    {
                        icon: <LuAlarmClock size={20} />,
                        description: "Beginner B: Sunday 12:45pm (1 hour)",
                    },
                ],
            },
            {
                title: "Level 1",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description: "L1A: Saturday 5pm (1.5 hours)",
                    },
                    {
                        icon: <LuAlarmClock size={20} />,
                        description: "L1B: Sunday 5pm (1.5 hours)",
                    },
                ],
            },
            {
                title: "Level 2",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description: "L2A: Saturday 3:30pm (1.5 hours)",
                    },
                    {
                        icon: <LuAlarmClock size={20} />,
                        description: "L2B: Sunday 3:30pm (1.5 hours)",
                    },
                    {
                        icon: <LuAlarmClock size={20} />,
                        description: "L2D›: Sunday 5:00pm (1.5 hours)",
                    },
                ],
            },
            {
                title: "Level 3",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L3A: Saturday 3:30pm (1.5 hours) , Wednesday 6:30pm (1 hour)",
                    },
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L3B: Sunday 3:30pm (1.5 hours) , Friday 6:30pm (1 hour)",
                    },
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L3C: Saturday 5:00pm (1.5 hours) , Thursday 6:30pm (1 hour)",
                    },
                ],
            },
        ],
    },
    {
        programDetails: {
            id: "program-intermediate",
            levelTag: "(Level 4 - Level 7)",
            imgSrc: intermediateDancerProgram,
            imgAlt: "Dance Form",
            title: "Intermediate Dancer Program",
            description: `Structured ballet class focusing on proper posture, technique, and vocabulary with introduction of the use of ballet barre in Level 4. Level 5 students will be introduced to contemporary style dance. Level 5 and above learn 3 styles - Ballet, Folk, Contemporary.`,
            buttonText: "Join Now",
            buttonLink: "/contact",
        },
        programLevels: [
            {
                title: "Level 4",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L4A: Saturday 2:45pm (1.5 hours) , Wednesday 6:30pm (1 hour)",
                    },
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L4B: Sunday 2:45pm (1.5 hours) , Friday 6:30pm (1 hour)",
                    },
                ],
            },
            {
                title: "Level 5",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L5A: Saturday 1pm (2.5 hours) ,Tuesday 6:30pm (1 hour)",
                    },
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L5B: Sunday 1pm (2.5 hours) , Thursday 6:30pm (1 hour)",
                    },
                ],
            },
            {
                title: "Level 6",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L6A: Saturday 1pm (2.5 hours) , Wednesday 7:30pm (1 hour)",
                    },
                ],
            },
            {
                title: "Level 7",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L7B: Sunday 9am (3.5 hours) , Thursday 7:30pm (1.25 hours)",
                    },
                ],
            },
        ],
    },
    {
        programDetails: {
            id: "program-advanced",
            levelTag: "(Level 8 - Pre-Professional)",
            imgSrc: advancedDancerProgram,
            imgAlt: "Dance Form",
            title: "Advanced Dancer Program",
            description: `More fast paced and challenging movement within all 3 styles of dance. Starting Level 8 students will be introduced to pointe shoes (also dependent on level of strength per student, may only advance to pointe with instructors recommendation.)`,
            buttonText: "Join Now",
            buttonLink: "/contact",
        },
        programLevels: [
            {
                title: "Level 8",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L8A: Saturday 9am (3 hours) , Tuesday 7:30pm (1.5 hours)",
                    },
                ],
            },
            {
                title: "Level 9",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L9A: Saturday 9am (3.5 hours) , Tuesday 7:30pm (1.5 hours)",
                    },
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "L9B: Sunday 9am (3.5 hours) , Thursday 7:30pm (1.5 hours)",
                    },
                ],
            },
            {
                title: "Pre-Professional",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "Pre-Professional A: Saturday 9am (3.5 hours) , Wednesday 7:30pm (2.5 hours)",
                    },
                    {
                        icon: <LuAlarmClock size={20} />,
                        description:
                            "Pre-Professional B: Sunday 9am (3.5 hours) , Friday 7:30pm (2.5 hours)",
                    },
                ],
            },
        ],
    },
    {
        programDetails: {
            id: "program-special-training",
            levelTag: "(Special Training - S, M, L)",
            imgSrc: specialTrainingProgram,
            imgAlt: "Dance Form",
            title: "Special Training ",
            description: `Classes appropriate for those who want to fine tune their ballet technical skills and flexibility with the goal of participating in competitions. Depending on competition, must participate in Special Training in order to qualify (number of hours of training per week required to participate in UBC, YAGP, ADC/IBC)`,
            buttonText: "Join Now",
            buttonLink: "/contact",
        },
        programLevels: [
            {
                title: "Special Training S",
                content: [
                    {
                        // icon: <LuAlarmClock size={20} />,
                        description:
                            "Contact for details or ask your instructor!",
                    },
                ],
            },
            {
                title: "Special Training M",
                content: [
                    {
                        // icon: <LuAlarmClock size={20} />,
                        description:
                            "Contact for details or ask your instructor!",
                    },
                ],
            },
            {
                title: "Special Training L",
                content: [
                    {
                        // icon: <LuAlarmClock size={20} />,
                        description:
                            "Contact for details or ask your instructor!",
                    },
                ],
            },
        ],
    },
    {
        programDetails: {
            id: "program-summer-intensive-training",
            levelTag: "(Summer Intensive - SS, S, M, L)",
            imgSrc: summerIntensiveProgram,
            imgAlt: "Dance Form",
            title: "Summer Intensive Training",
            description: `Keep in shape and advance your skills over the long summer break with our comprehensive classes offered Monday through Friday for all levels. Each week, learn new dances and participate in an informal Friday showcase—an excellent opportunity to prepare solos, duets, and group routines for spring competitions. Advanced students benefit from guest instructors from renowned companies, including past visits from Chen Yan, American Ballet Theatre Ballet Master, and Ao Wang, Joffrey Ballet dancer. Join us for a summer of growth, creativity, and inspiration!`,
            buttonText: "Join Now",
            buttonLink: "/contact",
        },
        programLevels: [
            {
                title: "Summer Intensive SS",
                content: [
                    {
                        // icon: <LuAlarmClock size={20} />,
                        description: "Contact for more details",
                    },
                ],
            },
            {
                title: "Summer Intensive S",
                content: [
                    {
                        // icon: <LuAlarmClock size={20} />,
                        description: "Contact for more details",
                    },
                ],
            },
            {
                title: "Summer Intensive M",
                content: [
                    {
                        // icon: <LuAlarmClock size={20} />,
                        description: "Contact for more details",
                    },
                ],
            },
            {
                title: "Summer Intensive L",
                content: [
                    {
                        // icon: <LuAlarmClock size={20} />,
                        description: "Contact for more details",
                    },
                ],
            },
        ],
    },
    {
        programDetails: {
            id: "program-adult",
            levelTag: "(Adult - Ballet, Exercise)",
            imgSrc: adultProgram,
            imgAlt: "Dance Form",
            title: "Adult Program",
            description: `Our Adult Exercise/Ballet class is designed to promote active health, flexibility, and strength in a welcoming environment tailored for adults of all levels. Combining elements of ballet technique with low-impact exercises, this class offers a full-body workout that helps improve posture, core strength, and muscle tone. Whether you’re a seasoned dancer or new to ballet, our instructors guide you through movements that enhance flexibility, coordination, and balance. Join us to experience the physical and mental benefits of ballet in a supportive community focused on health, wellness, and personal growth!`,
            buttonText: "Join Now",
            buttonLink: "/contact",
        },
        programLevels: [
            {
                title: "Adult Ballet",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description: "Tuesdays 6:00pm 2 hours",
                    },
                ],
            },
            {
                title: "Adult Exercise",
                content: [
                    {
                        icon: <LuAlarmClock size={20} />,
                        description: "Thursdays 6:00pm 2 hours",
                    },
                ],
            },
        ],
    },
];

export default programsData;
