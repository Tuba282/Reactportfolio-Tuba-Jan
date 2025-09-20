import { SparklesCore } from "../Components/ui/sparkles";
import React, { useContext } from 'react';
import { ThemeContext } from '../Settings/ThemeProvider.jsx';
import TextRevealEffect from "./TextAnimate";

export function SparklesPreview({ text }) {


    const { theme } = useContext(ThemeContext);
    return (
        <div
            className='h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden mt-10 md:mt-15 lg:mt-20 xl:mt-30 px-2 ms:p-0'>
            <h2 className="overflow-hidden">
                <TextRevealEffect text={text} className={`md:text-7xl text-5xl  lg:text-9xl font-bold text-center ${theme.text == "text-black" ? "text-white" : theme.text} relative z-20`} />
            </h2>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div
                    className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div
                    className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div
                    className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div
                    className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF" />

                {/* Radial Gradient to prevent sharp edges */}
                <div
                    className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}
