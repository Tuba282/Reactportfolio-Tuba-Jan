import { SparklesCore } from "../Components/ui/sparkles";
import React, { useContext } from 'react';
import { ThemeContext } from '../Settings/ThemeProvider.jsx';

export function SparklesPreview({ text }) {
    const { theme } = useContext(ThemeContext);

    return (
        <section
            aria-labelledby={`section-${text}`}
            className="section-heading relative flex min-h-[15rem] w-full flex-col items-center justify-center overflow-hidden bg-black px-4 pt-16 sm:min-h-[18rem] md:pt-20 lg:pt-28"
        >
            <h2
                id={`section-${text}`}
                className={`relative z-20 text-center font-[sora] text-4xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl ${theme.text === "text-black" ? "text-white" : theme.text}`}
            >
                {text}
            </h2>
            <div className="relative h-28 w-full max-w-2xl sm:h-36">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-80 blur-sm sm:inset-x-20" />
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent sm:inset-x-20" />
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="h-full w-full"
                    particleColor="#FFFFFF"
                />
                <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
            </div>
        </section>
    );
}
