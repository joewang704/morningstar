// programsData.js

import youngDancerProgram from "../images/programs/young-dancer-program.webp";
import intermediateDancerProgram from "../images/programs/intermediate-program.webp";
import advancedDancerProgram from "../images/programs/advanced-dancer-program.webp";
import specialTrainingProgram from "../images/programs/special-training-program.webp";
import summerIntensiveProgram from "../images/programs/summer-intensive-program.webp";
import adultProgram from "../images/programs/adult-program.webp";

const programsData = [
    {
        id: "program-young-dancer",
        imgSrc: youngDancerProgram,
        imgAlt: "Young Dancer Program",
        title: "Young Dancer Program",
        description:
            "Classes for kids combining movement and music to develop body awareness, rhythm, flexibility, and confidence through ballet and Chinese folk dance.",
        highlights: ["Ages 4+", "Ballet + Chinese Folk", "Weekend classes"],
    },
    {
        id: "program-intermediate",
        imgSrc: intermediateDancerProgram,
        imgAlt: "Intermediate Dancer Program",
        title: "Intermediate Dancer Program",
        description:
            "Structured training focused on proper posture, technique, and vocabulary across ballet, folk, and contemporary styles with progressive skill-building.",
        highlights: ["Ballet + Folk + Contemporary", "Barre technique", "Multi-style training"],
    },
    {
        id: "program-advanced",
        imgSrc: advancedDancerProgram,
        imgAlt: "Advanced Dancer Program",
        title: "Advanced Dancer Program",
        description:
            "Challenging, fast-paced training across all three dance disciplines, including pointe work for qualifying students pursuing a high level of artistry.",
        highlights: ["Pointe shoe training", "Pre-professional track", "All 3 dance styles"],
    },
    {
        id: "program-special-training",
        imgSrc: specialTrainingProgram,
        imgAlt: "Special Training Program",
        title: "Special Training",
        description:
            "Intensive fine-tuning of technical skills and flexibility for students pursuing competition at recognized events including UBC, YAGP, and ADC/IBC.",
        highlights: ["Competition focused", "Technical refinement", "Flexibility training"],
    },
    {
        id: "program-summer-intensive",
        imgSrc: summerIntensiveProgram,
        imgAlt: "Summer Intensive Training Program",
        title: "Summer Intensive Training",
        description:
            "A comprehensive summer program running Monday through Friday for all levels, with weekly showcases and guest instructors from world-renowned companies.",
        highlights: ["All skill levels welcome", "Mon – Fri schedule", "Guest instructors"],
    },
    {
        id: "program-adult",
        imgSrc: adultProgram,
        imgAlt: "Adult Program",
        title: "Adult Program",
        description:
            "Ballet-based classes designed for adults of all experience levels, promoting flexibility, core strength, posture, and overall wellness in a welcoming environment.",
        highlights: ["Adults of all levels", "Ballet + exercise", "Health & wellness focus"],
    },
];

export default programsData;
