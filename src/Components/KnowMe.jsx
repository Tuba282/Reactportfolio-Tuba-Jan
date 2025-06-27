import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../Settings/ThemeProvider.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const KnowMe = () => {
    const textRef = useRef(null);
    const sectionRef = useRef(null);

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { x: 0 },
                {
                    x: () => `-${(textRef.current.scrollWidth - sectionRef.current.offsetWidth)}px`,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top center',
                        end: 'center top',
                        scrub: 1,
                        pin: false,
                        // markers: true,
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`w-full min-h-[60vh] ${theme.bg} flex items-center bg-white justify-start overflow-x-hidden py-5`}>
            <h2
                ref={textRef}
                className={`whitespace-nowrap text-[3rem] sm:text-[5rem] text-shadow-2xs text-shadow-black md:text-[8rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[20rem] uppercase font-bold ${theme.text} tracking-tight font-[heroMainHeadings] pl-2`}
                style={{ willChange: 'transform' }}
            >
                There is always one more bug to fix ....
            </h2>
        </section>
    );
};

export default KnowMe;