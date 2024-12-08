// image imports

// competition section
import row1img1 from "../images/compeititons/row1-img1.webp";
import row1img2 from "../images/compeititons/row1-img2.webp";
import row1img3 from "../images/compeititons/row1-img3.webp";
import row1img4 from "../images/compeititons/row1-img4.webp";
import row1img5 from "../images/compeititons/row1-img5.webp";

import row2img1 from "../images/compeititons/row2-img1.webp";
import row2img2 from "../images/compeititons/row2-img2.webp";
import row2img3 from "../images/compeititons/row2-img3.webp";
import row2img4 from "../images/compeititons/row2-img4.webp";
import row2img5 from "../images/compeititons/row2-img5.webp";

// success stories section
import brown from "../images/success-stories/brown.webp";
import columbia from "../images/success-stories/columbia.webp";
import harvard from "../images/success-stories/harvard.webp";
import mit from "../images/success-stories/mit.webp";
import princeton from "../images/success-stories/princeton.webp";
import stanford from "../images/success-stories/stanford.webp";

// Alumni Photos
import allumniAvatar from "../images/alumni/alumni-avatar.webp";
import erinChang from "../images/alumni/1 Erin Chang.webp";
import jaimeiChen from "../images/alumni/2 Jaimie Chen.webp";
import jasmineChen from "../images/alumni/3 Jasmine Chen.webp";
import erinDing from "../images/alumni/4 Erin Ding.webp";
import remieGoins from "../images/alumni/5 Remie Goins.webp";
import cheryGong from "../images/alumni/6 Cherry Gong.webp";
import angelaHuang from "../images/alumni/7 Angela Huang.webp";
import hannahHuang from "../images/alumni/8 hannah huang.webp";

import sophieKhanmamdedov from "../images/alumni/10 Sophie Khanmamedov.webp";
import angelaLee from "../images/alumni/11 Angela Lee.webp";
import christineLuo from "../images/alumni/12 Chris Luo.webp";
import daphneManning from "../images/alumni/13 Daphne Jing Manning.webp";
import abbeyPan from "../images/alumni/14 Abbey Pan.webp";
import gracePeng from "../images/alumni/15 Grace Peng.webp";
import ashelyPresnell from "../images/alumni/16 Ashley Presnell.webp";
import christinaSun from "../images/alumni/17 Christina Sun.webp";
import dorothySzymkiewicz from "../images/alumni/18 Dorothy Szymklewicz.webp";
import jessicaTang from "../images/alumni/19 Jessica Tang.webp";
import sylviaTang from "../images/alumni/20 Sylvia Tang.webp";
import leilaniTian from "../images/alumni/21 Leilani Tian.webp";
import avaWei from "../images/alumni/22 Ava Wei.webp";
import margaretWei from "../images/alumni/23 Margaret Wei.webp";
import ellieWong from "../images/alumni/24 Ellie Wong.webp";
import connieXiao from "../images/alumni/25 Connie Xiao.webp";
import kathyYe from "../images/alumni/26 Kathy Ye.webp";
import samanthaYe from "../images/alumni/27 Samantha Ye.webp";
import chelseaYoung from "../images/alumni/28 Chelsea Young.webp";
import alexandraYuan from "../images/alumni/29 Alexandra Yuan.webp";
import jennyZha from "../images/alumni/30 Jenny Zha.webp";
import amyZhang from "../images/alumni/31 Amy Zhang.webp";
import angelaZhang from "../images/alumni/32 Angela Zhang.webp";
import kaylynZhong from "../images/alumni/33 Kaylyn Zhong.webp";
import vinetiaZhu from "../images/alumni/34 Venetia Zhu.webp";

// data

// competition section
const competitionData = [
    {
        src: row1img1,
        alt: "Competition logo 1",
    },
    {
        src: row1img2,
        alt: "Competition logo 2",
    },
    {
        src: row1img3,
        alt: "Competition logo 3",
    },
    {
        src: row1img4,
        alt: "Competition logo 4",
    },
    {
        src: row1img5,
        alt: "Competition logo 5",
    },
    {
        src: row2img1,
        alt: "Competition logo 6",
    },
    {
        src: row2img2,
        alt: "Competition logo 7",
    },
    {
        src: row2img3,
        alt: "Competition logo 8",
    },
    {
        src: row2img4,
        alt: "Competition logo 9",
    },
    {
        src: row2img5,
        alt: "Competition logo 10",
    },
];

const successStories = [
    {
        src: brown,
        alt: "Brown",
    },
    {
        src: columbia,
        alt: "Columbia",
    },
    {
        src: harvard,
        alt: "Harvard",
    },
    {
        src: mit,
        alt: "MIT",
    },
    {
        src: princeton,
        alt: "Princeton",
    },
    {
        src: stanford,
        alt: "Stanford",
    },
];

const testimonials = {
    top: [
        {
            id: 1,
            img: erinChang,
            name: "Erin Chang",
            college: "Brown University",
            intro: "I completed my BAs in Public Health and Health and Human Biology. I am now pursuing my MD and a masters in Population Health at Brown.",
        },
        {
            id: 2,
            img: jaimeiChen,
            name: "Jaime Chen",
            college: "Cornell University",
            intro: "Pursuing a bachelor’s in Hotel Administration",
        },
        {
            id: 3,
            img: jasmineChen,
            name: "Jasmine Chen",
            college: "University of Georgia",
            intro: "I am majoring in Human Development and Family Sciences and minoring in Dance. I plan to attend Physical Therapy school to receive my Doctor of Physical Therapy degree",
        },
        {
            id: 4,
            img: erinDing,
            name: "Erin Ding",
            college: null,
            intro: "MSDA was my second home, shaping me with lifelong friendships, invaluable lessons, and a lasting passion for dance.",
        },
        {
            id: 5,
            img: remieGoins,
            name: "Remie Goins",
            college: "Houston Ballet Academy",
            intro: "I have now joined the Houston Ballet company!",
        },
        {
            id: 6,
            img: cheryGong,
            name: "Chery Gong",
            college: "University of Georgia",
            intro: "I completed my degree in Finance and International Business and work at Deloitte",
        },
        {
            id: 7,
            img: angelaHuang,
            name: "Angela Huang",
            college: "Washington University @ St. Louis",
            intro: "I graduated with a Finance degree and am now an Investment Banking Associate.",
        },
        {
            id: 8,
            img: hannahHuang,
            name: "Hannah Huang",
            college: "Emory University",
            intro: "I am majoring in Biology on the Pre-Med track and plan on working in Emergency Medical Services and doing clinical research",
        },
        {
            id: 9,
            img: allumniAvatar,
            name: "Alanna Jacob",
            college: "University of Georgia",
            intro: "I became a track and field athlete and ran track in college before transferring to the University of Georgia to study Journalism. This past summer I worked for ESPN.",
        },
        {
            id: 10,
            img: sophieKhanmamdedov,
            name: "Sophie Khanmamdedov",
            college: "New York University",
            intro: "I am in my third year majoring in Business and minoring in Public Health; I participated in the University College of London’s Fresher Dance Show",
        },
        {
            id: 11,
            img: angelaLee,
            name: "Angela Lee",
            college: "Emory University",
            intro: "I completed a Bachelor of Business Administration in Organization and Management Consulting and Information Systems, with a double major in International Studies.",
        },
    ],
    middle: [
        {
            id: 12,
            img: christineLuo,
            name: "Christine Luo",
            college: "Princeton University",
            intro: "I majored in Economics and am now based in Boston and working for Lazard’s Tech Investment Banking group",
        },
        {
            id: 13,
            img: daphneManning,
            name: "Daphne Manning",
            college: "Rice University",
            intro: "I completed my bachelors degree in Mathematical Economics. I am working as a quant at Citibank and learning new styles of dance in my free time.",
        },
        {
            id: 14,
            img: abbeyPan,
            name: "Abbey Pan",
            college: "Harvard University",
            intro: "I received my Bachelor's degree in Neuroscience. I am now pursuing my MD degree at the Johns Hopkins University School of Medicine.",
        },
        {
            id: 15,
            img: gracePeng,
            name: "Grace Peng",
            college: "Duke University",
            intro: "I am majoring in Economics (Finance Concentration) and minoring in Psychology and Music. I just finished interning at a hedge fund",
        },
        {
            id: 16,
            img: ashelyPresnell,
            name: "Ashley Presnell",
            college: "University of California, Los Angeles",
            intro: "I am majoring in Microbiology, Immunology, and Molecular Genetics. I currently am the head clinical research intern of a pulmonology lab in the UCLA Medical School",
        },
        {
            id: 17,
            img: christinaSun,
            name: "Christina Sun",
            college: "none",
            intro: "I've recently graduated dental school and am currently doing a pediatric dentistry residency.",
        },
        {
            id: 18,
            img: dorothySzymkiewicz,
            name: "Dorothy Szymkiewicz",
            college: "MIT",
            intro: "I studied mechanical engineering and am currently a Senior Robotics Engineer making hardware for automating cell therapy manufacturing.",
        },
        {
            id: 19,
            img: jessicaTang,
            name: "Jessica Tang",
            college: "Duke University",
            intro: "I am majoring in Statistics with a minor in Economics and earning a Markets and Management Certificate",
        },
        {
            id: 20,
            img: sylviaTang,
            name: "Sylvia Tang",
            college: "University of Pennsylvania",
            intro: "I obtained my bachelor's in biochemistry and biophysics and master's in chemistry. I am currently an MD-PhD student at Washington University School of Medicine in St. Louis",
        },
        {
            id: 21,
            img: leilaniTian,
            name: "Leilani Tian",
            college: "Stanford University",
            intro: "I earned my bachelor’s in Product Design and master’s in Education and Design. I performed with Ballet Austin for a year and am excited to be a part-time lecturer with Stanford",
        },
        {
            id: 22,
            img: avaWei,
            name: "Ava Wei",
            college: "University of Georgia",
            intro: "I completed my bachelor’s degree in Management Information Systems and Risk Management and Insurance and am working as a technology consultant",
        },
    ],
    bottom: [
        {
            id: 23,
            img: margaretWei,
            name: "Margaret Wei",
            college: "Georgia Tech",
            intro: "I am pursuing my undergraduate degrees in Neuroscience and History, Technology, and Society and am currently working as Chief Scribe at Emory",
        },
        {
            id: 24,
            img: ellieWong,
            name: "Ellie Wong",
            college: "Stanford University",
            intro: "I completed my bachelors degree in English Literature and finishing my masters degree in Philosophy. I'll be starting a Ph.D in English Literature next year",
        },
        {
            id: 25,
            img: connieXiao,
            name: "Connie Xiao",
            college: "Johns Hopkins University",
            intro: "I majored in Molecular and Cellular Biology and Public Health Studies and continued medical school at Vanderbilt. I am applying for residency in Emergency Medicine.",
        },
        {
            id: 26,
            img: kathyYe,
            name: "Kathy Ye",
            college: "Georgia Tech",
            intro: "I'm earning a Bachelor's in Industrial Engineering with a minor in International Business, aiming for a Master's in IE or Analytics at Georgia Tech.",
        },
        {
            id: 27,
            img: samanthaYe,
            name: "Samantha Ye",
            college: "University of Georgia",
            intro: "Dancing at MSDA helped me find a balance between focus and relaxation, shaping me into a better person both on and off the stage.",
        },
        {
            id: 28,
            img: chelseaYoung,
            name: "Chelsea Young",
            college:
                "University of Florida & University of North Carolina at Chapel Hill",
            intro: "I am majoring in psychology and will pursue further education to hopefully become a school psychologist in the future.",
        },
        {
            id: 29,
            img: alexandraYuan,
            name: "Alexandra Yuan",
            college: "none",
            intro: "MSDA is truly so special for their dedication to excellence. I loved warming up with the teachers and my friends, using the railings as makeshift barres",
        },
        {
            id: 30,
            img: jennyZha,
            name: "Jenny Zha",
            college: "Emory University",
            intro: "I completed bachelors degrees in both neuroscience & behavioral biology and sociology and will be starting a Master of Public Health in epidemiology at Columbia University.",
        },
        {
            id: 31,
            img: amyZhang,
            name: "Amy Zhang",
            college: "Emory University & Brown University",
            intro: "I earned a bachelor’s in violin performance and public health and a Master of Public Health in Epidemiology",
        },
        {
            id: 32,
            img: angelaZhang,
            name: "Angela Zhang",
            college: "Columbia University",
            intro: "I have a degree in Operations Research. I am currently working as a Quantitative Researcher in New York.",
        },
        {
            id: 33,
            img: kaylynZhong,
            name: "Kaylyn Zhong",
            college: "Duke University",
            intro: "I am now studying Economics and involved in other business and entrepreneurship organizations on campus",
        },
        {
            id: 34,
            img: vinetiaZhu,
            name: "Vinetia Zhu",
            college: "University of Georgia",
            intro: "I went to get my bachelor's of fine arts degree in printmaking and painting. I attended print conferences at RISD, and have a exhibition show at the Lamar Dodd School of Art",
        },
    ],
};

export { competitionData, successStories, testimonials };
