import React from "react";
import { motion } from "framer-motion";

import { testimonials } from "../../constants/home";

const SCROLL_DURATION = 800;

const ScrollingTestimonials = () => {
    return (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col items-center text-center gap-1">
                <h2 className="body-large color-golden">ALUMNI</h2>
                <h1 className="heading-1 w-700">Students Success Stories</h1>
            </div>
            <div className="p-4 overflow-x-hidden relative">
                <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-black to-transparent" />

                <div className="flex items-center mb-4">
                    <TestimonialList list={testimonials.top} duration={SCROLL_DURATION} />
                    <TestimonialList list={testimonials.top} duration={SCROLL_DURATION} />
                    <TestimonialList list={testimonials.top} duration={SCROLL_DURATION} />
                </div>
                <div className="flex items-center mb-4">
                    <TestimonialList
                        list={testimonials.middle}
                        duration={SCROLL_DURATION}
                        reverse
                    />
                    <TestimonialList
                        list={testimonials.middle}
                        duration={SCROLL_DURATION}
                        reverse
                    />
                    <TestimonialList
                        list={testimonials.middle}
                        duration={SCROLL_DURATION}
                        reverse
                    />
                </div>
                <div className="flex items-center">
                    <TestimonialList
                        list={testimonials.bottom}
                        duration={SCROLL_DURATION}
                    />
                    <TestimonialList
                        list={testimonials.bottom}
                        duration={SCROLL_DURATION}
                    />
                    <TestimonialList
                        list={testimonials.bottom}
                        duration={SCROLL_DURATION}
                    />
                </div>

                <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-black to-transparent" />
            </div>
        </div>
    );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
    return (
        <motion.div
            initial={{ translateX: reverse ? "-100%" : "0%" }}
            animate={{ translateX: reverse ? "0%" : "-100%" }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 px-2"
        >
            {list.map((t) => {
                return (
                    <div
                        key={t.id}
                        className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
                    >
                        <img src={t.img} className="w-full h-44 object-cover" />
                        <div className="bg-black text-white p-4">
                            <span className="block font-semibold text-lg mb-1">
                                {t.name}
                            </span>
                            <span className="block color-golden mb-3 text-sm font-medium">
                                {t.college}
                            </span>
                            <span className="block text-sm">{t.intro}</span>
                        </div>
                    </div>
                );
            })}
        </motion.div>
    );
};
export default ScrollingTestimonials;
