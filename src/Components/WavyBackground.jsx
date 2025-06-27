
import { WavyBackground } from "../Components/ui/wavy-background";
import PressButton from "./PressButton";
import { LinkPreview } from "./ui/link-preview";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

import React, { useState, useEffect } from "react";

export function HeroText() {
    const [showSecondLine, setShowSecondLine] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowSecondLine(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <WavyBackground className="max-w-4xl w-full mx-auto pb-20 sm:pb-32 md:pb-40">
            <div className="heroMainHeading w-full min-h-[200px] sm:min-h-[300px] px-3 py-6 sm:px-8 sm:py-10 flex flex-col items-center justify-center">
                {/* <img className='logo w-full h-auto max-w-xs sm:max-w-md mb-4' src="/TubaJanLogo.png" alt="Tuba Jan Logo Image" /> */}

                <LinkPreview url="https://res.cloudinary.com/dzq61zzxb/image/upload/v1747682036/tubaPortfolio_grh6w2.png" className="font-bold">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center tracking-tighter uppercase font-[Quicksand] text-shadow-gray-900 text-white text-shadow-xs font-bold">Tuba Jan</h1>
                </LinkPreview>
                <span className="text-base sm:text-lg md:text-xl text-gray-500 text-shadow-gray-200 text-shadow-xs mt-2 mb-4 text-center">A Web Developer in Karachi, Pakistan</span>

                <TypewriterEffectSmooth words={[
                    {
                        text: " Innovative ",
                        className: "text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center tracking-tighter uppercase font-[heroMainHeadings] text-shadow-gray-900 text-white text-shadow-xs font-bold"
                    },
                    {
                        text: " Solutions ",
                        className: "text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center tracking-tighter uppercase font-[heroMainHeadings] text-shadow-gray-900 text-white text-shadow-xs font-bold"
                    },
                    {
                        text: " for ",
                        className: "text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center tracking-tighter uppercase font-[heroMainHeadings] text-shadow-gray-900 text-white text-shadow-xs font-bold"
                    }
                ]} />
                {showSecondLine && (
                    <TypewriterEffectSmooth words={[
                        {
                            text: " A ",
                            className: "text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center tracking-tighter uppercase font-[heroMainHeadings] text-shadow-gray-900 text-white text-shadow-xs font-bold"
                        },
                        {
                            text: " Seamless ",
                            className: "text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center tracking-tighter uppercase font-[heroMainHeadings] text-shadow-gray-900 text-white text-shadow-xs font-bold"
                        },
                        {
                            text: " Web ",
                            className: "text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center tracking-tighter uppercase font-[heroMainHeadings] text-shadow-gray-900 text-white text-shadow-xs font-bold"
                        },
                        {
                            text: " Experience ",
                            className: "text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center tracking-tighter uppercase font-[heroMainHeadings] text-shadow-gray-900 text-white text-shadow-xs font-bold"
                        },
                    ]} />
                )}

                <a href="/TubaJanCV.pdf" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                    <PressButton text={'Resume'} extraClasses={'p-2 sm:p-3 md:p-4 text-lg sm:text-2xl md:text-4xl tracking-wider uppercase  mt-6'} />
                </a>
            </div>
        </WavyBackground>
    );
}
