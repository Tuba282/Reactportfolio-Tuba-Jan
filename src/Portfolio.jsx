import Hero from './Components/Hero'
import KnowMe from './Components/KnowMe'
import TimelineDemo from './Components/About'
import { SparklesPreview } from './Components/SparkelsAboutMe'
import Idea from './Components/Idea'
import 'aos/dist/aos.css';
import { SmoothCursor } from "./Components/ui/smooth-cursor";
import BentoGrid from './Components/ui/BentoGrid'
import { Testimonials } from './Components/Testimonials'
import SkillsMarquee from './Components/SkillsMarquee'
import Awards from './Components/Awards'
import NumberTricker from './Components/NumberTricker'

const Portfolio = () => {
    return (
        <>
            <Hero />
            <KnowMe />
            <NumberTricker/>
            <SparklesPreview text={"About Me"} />
            <TimelineDemo />
            <div className='hidden sm:block'>
                <SparklesPreview text={"Projects"} />
                <BentoGrid />
            </div>
            <SparklesPreview text={"Testimonial"} />
            <Testimonials />
            <SparklesPreview text={"Skills"} />
            <SkillsMarquee className={' my-5 sm:my-20 md:my-30'} />
            <SparklesPreview text={"Certificates"} />
            <Awards/>
            <Idea />
            <SmoothCursor />
        </>
    )
}

export default Portfolio


/*
import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Hero from "./Components/Hero";
import KnowMe from "./Components/KnowMe";
import TimelineDemo from "./Components/About";
import { SparklesPreview } from "./Components/SparkelsAboutMe";
import Projects from "./Components/Projects";
import Idea from "./Components/Idea";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const Portfolio = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1.2,
            lerp: 0.1,
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <>
            <div data-scroll-container ref={scrollRef}>
                <Hero />
                <KnowMe />
                <SparklesPreview text={"About Me"} />
                <TimelineDemo />
                <SparklesPreview text={"Projects"} />
                <Projects />
                <Idea />
            </div>
            <SmoothCursor />
        </>
    );
};

export default Portfolio;
*/ 