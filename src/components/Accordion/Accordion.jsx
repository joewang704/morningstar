import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({ title, content, isOpen, onClick, isLast }) => {
    return (
        <div className={`${!isLast ? "border-b border-[#374151]" : ""}`}>
            <button
                className="w-full px-[28px] py-[26px] md:py-[36px]  text-left flex justify-between items-center"
                onClick={onClick}
            >
                <span className="heading-5 font-manrope w-700">{title}</span>
                <IoIosArrowDown
                    className={`transform transition-transform duration-300 text-white ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                />
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <div className="px-[28px] pb-[28px] space-y-3">
                        {content.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 body-large"
                            >
                                {item.icon}
                                <span>{item.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Accordion({ data }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full mx-auto rounded-[16px] overflow-hidden border border-[#374151] bg-transparent">
            {data.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                    }
                    isLast={index === data.length - 1}
                />
            ))}
        </div>
    );
}

// Example usage:
export function AccordionExample() {
    const accordionData = [
        {
            title: "Section 1",
            content: [
                {
                    icon: <span className="text-white">🔍</span>,
                    description: "This is the first item in section 1",
                },
                {
                    icon: <span className="text-white">📌</span>,
                    description: "This is the second item in section 1",
                },
            ],
        },
        {
            title: "Section 2",
            content: [
                {
                    icon: <span className="text-white">💡</span>,
                    description: "This is an item in section 2",
                },
            ],
        },
        {
            title: "Section 3",
            content: [
                {
                    icon: <span className="text-white">🚀</span>,
                    description: "This is an item in section 3",
                },
            ],
        },
    ];

    return <Accordion data={accordionData} />;
}
