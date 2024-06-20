import React, { useEffect } from 'react';

const ScrollReveal = () => {
    useEffect(() => {
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");

            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", reveal);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return null; // Since this component only adds an event listener, it doesn't render any UI
};

export default ScrollReveal;
