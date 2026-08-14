import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextRevealEffect = ({ text, className }) => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return <h2 ref={textRef} className={`inline-block ${className}`}>{text}</h2>;
};

export default TextRevealEffect;
