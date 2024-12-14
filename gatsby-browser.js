import React from "react";
import "./src/styles/global.css";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/700.css";

import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";

export const onRouteUpdate = ({ location }) => {
    if (location.hash) {
        // Delay the scroll until after the page has fully rendered
        setTimeout(() => {
            // Get the target element using the hash value
            const targetElement = document.querySelector(location.hash);

            if (targetElement) {
                // Calculate the scroll position to center the target element
                const targetOffset = targetElement.offsetTop;
                const targetHeight = targetElement.offsetHeight;
                const viewportHeight = window.innerHeight;

                // Calculate the position to center the section
                const scrollToPosition =
                    targetOffset - viewportHeight / 2 + targetHeight / 2;

                // Scroll to the target section with smooth scrolling
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: "smooth", // Optional: Add smooth scrolling
                });
            }
        }, 0); // Delay to ensure page is fully loaded
    } else {
        // If no hash, scroll to the top of the page
        window.scrollTo(0, 0);
    }
};
