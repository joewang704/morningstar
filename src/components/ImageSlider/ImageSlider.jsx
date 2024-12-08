import React, { useState, useEffect, useCallback } from "react";

// image imports
import sliderImage1 from "../../images/home/hero-slider-poster-1.webp";
import sliderImage2 from "../../images/home/hero-slider-poster-2.webp";
import sliderImage3 from "../../images/home/hero-slider-poster-3.webp";
import sliderImage4 from "../../images/home/hero-slider-poster-4.webp";

const slides = [
    {
        id: 1,
        image: sliderImage3,
        title: "Cultural Performance",
    },
    {
        id: 2,
        image: sliderImage1,
        title: "Morning Stars 2024",
    },
    {
        id: 3,
        image: sliderImage2,
        title: "20 Years Anniversary",
    },

    {
        id: 4,
        image: sliderImage4,
        title: "Special Event",
    },
];

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    if (!isClient) {
        return null; // Return null on server-side to prevent hydration issues
    }

    return (
        <div className="h-full min-h-[500px] w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden={index !== currentSlide}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-full object-contain pb-12"
                    />
                    {/* <div className="absolute inset-0 bg-black/40">
                        <div className="absolute bottom-20 left-10 text-white">
                            <h2 className="text-4xl font-bold">
                                {slide.title}
                            </h2>
                        </div>
                    </div> */}
                </div>
            ))}
            <div className="absolute bottom-0 w-full left-1/2 z-10 flex -translate-x-1/2 items-center">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`group flex flex-col items-start transition-all duration-300 ${
                            index === currentSlide
                                ? "basis-[40%]"
                                : "basis-[20%]"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <span className="mb-2 text-sm font-medium text-white">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <div
                            className={`transition-all w-full duration-300 ${
                                index === currentSlide
                                    ? "bg-white  h-[2px]"
                                    : "bg-white/50 h-[2px]"
                            }`}
                            style={{
                                width: "100%",
                            }}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
