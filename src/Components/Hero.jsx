
import PressButton from './PressButton.jsx'
import { GridBackgroundDemo } from "../Components/ui/background-beams";
import { HeroText } from './WavyBackground.jsx';
import { LinkPreview } from './ui/link-preview.jsx';
import React, { useState, useContext } from 'react'
import { ThemeContext } from '../Settings/ThemeProvider.jsx'

import themeOptions from '../Settings/themeOptions';

const Hero = () => {
    // const [theme, setTheme] = useState(themeOptions[0]);
    const [showPalette, setShowPalette] = useState(false);
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div  id="hero" className={`w-full min-h-screen relative overflow-hidden transition-all duration-500  `}>
            <GridBackgroundDemo />
            <div className="top absolute top-0 left-0 w-full min-h-screen z-[10] overflow-hidden">
                <div className={`workingArea w-full h-screen max-w-[1500px] mx-auto p-0 sm:p-5 transition-all duration-500`}>
                    <div className="icons w-full min-h-11  px-5 md:px-10 flex justify-between items-center z-[20] relative">
                        <div className="left flex items-center gap-3">
                            <LinkPreview url="https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/12/mariia-shalabaieva-whatsapp-unsplash.jpg" className="font-bold">
                                <a target="_blank" href="https://wa.me/923022183767"><img src="/whatsapp.png" className=' w-8 h-8 btn-press-effect drop-shadow-xs drop-shadow-gray-300' /></a>
                            </LinkPreview>
                            <LinkPreview url="https://techcrunch.com/wp-content/uploads/2020/10/gmail-icon-2020-ios.jpg" className="font-bold">
                                <a target="_blank" href="mailto:tubajan282@gmail.com"><img src="/google.png" className=' w-8 h-8 btn-press-effect drop-shadow-xs drop-shadow-gray-300' /></a>
                            </LinkPreview>
                        </div>
                        <div className="right flex items-center gap-3">
                            <LinkPreview url="https://img.freepik.com/free-photo/pile-3d-facebook-logos_1379-875.jpg" className="font-bold">
                                <a target="_blank" href='https://www.facebook.com/'><img src="/facebook.png" alt="" className=' w-8 h-8 btn-press-effect drop-shadow-xs drop-shadow-gray-300' /></a>
                            </LinkPreview>
                            <LinkPreview url="https://www.eyezy.com/blog/wp-content/uploads/2023/10/how-to-know-if-someone-is-talking-to-someone-else-on-instagram.jpg" className="font-bold">
                                <a target="_blank" href="https://www.instagram.com/tubajan282/"><img src="/instagram.png" className=' w-8 h-8 btn-press-effect drop-shadow-xs drop-shadow-gray-300' /></a>
                            </LinkPreview>
                            <LinkPreview url="https://onboardbase.com/blog/github/card.jpg" className="font-bold">
                                <a target="_blank" href='https://github.com/Tuba282'><img src="/github-sign.png" alt="" className=' w-8 h-8 bg-white rounded-sm btn-press-effect drop-shadow-xs drop-shadow-gray-300' /></a>
                            </LinkPreview>
                            <LinkPreview url="https://www.dg-training.co.uk/wp-content/uploads/2018/08/linkedin-911794_1920-1.jpg" className="font-bold">
                                <a target="_blank" href="https://www.linkedin.com/in/tuba-jan-10b0a12b5/"><img src="/linkedin.png" className=' w-8 h-8 btn-press-effect drop-shadow-xs drop-shadow-gray-300' /></a>
                            </LinkPreview>
                        </div>
                    </div>

                    <div className={theme.text + " transition-all duration-500"}>
                        <HeroText />
                    </div>
                </div>
            </div>
            <div className="absolute z-10 text bottom-10 left-10 flex gap-3 p-2">
                <div className="video max-w-[150px] w-full hidden sm:flex  h-30 relative overflow-hidden rounded shadow-xs  shadow-gray-200">
                    <video
                        src="https://res.cloudinary.com/dzq61zzxb/video/upload/v1747481986/screenzy_gnigkx.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="grid gap-2">
                    <div className="textBox max-w-[300px] text-xs font-semibold font-[Quicksand] w-full h-full shadow-sm  shadow-gray-700 bg-neutral-200 backdrop-blur-xs rounded p-1">
                        I craft fast, user-friendly websites optimized for growth and seamless performance.
                    </div>
                    <div className="textBox max-w-[400px] text-xs w-full h-full font-[Quicksand] shadow-sm  shadow-gray-700 bg-neutral-200 backdrop-blur-xs rounded p-1">
                        Every project merges creativity and functionality for a smooth user experience.
                    </div>
                </div>
            </div>

            {/* Theme Changer Button */}
            <div className="fixed bottom-8 right-8 z-50 flex flex-row-reverse items-end gap-3 transition-all duration-200">
                <button
                    className="w-10 h-10 rounded backdrop-blur-xs shadow-lg flex items-center justify-center border-2 border-gray-100/50 hover:scale-110 transition-all duration-200"
                    onClick={() => setShowPalette((v) => !v)}
                    title="Change Theme"
                >
                    <svg width="28" height="28" fill={theme.color} className={`${theme.bg} rounded-full`} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill={theme.bg} strokeWidth="2" />
                        <circle cx="12" cy="12" r="5" fill={theme.bg} />
                    </svg>
                </button>
                {showPalette && (
                    <div className=" mt-2 backdrop-blur-xs p-2 rounded shadow-xl  flex flex-row gap-2 fade-in-x border border-gray-100/50 transition-all duration-300">
                        {themeOptions.map((opt) => (
                            <button
                                key={opt.name}
                                className={`w-5 h-5 bg-${opt.bg} border-${opt.border} border-2  ${theme.name === opt.name ? 'scale-110' : ''} transition-all duration-200`}
                                onClick={() => { setTheme(opt); setShowPalette(false); }}
                                title={opt.name}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Hero;