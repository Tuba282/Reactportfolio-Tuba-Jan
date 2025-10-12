import React, { useContext, useRef, useEffect } from 'react';
import { ThemeContext } from '../Settings/ThemeProvider.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Idea = () => {
  const { theme } = useContext(ThemeContext);
  const have = "Have";
  const idea = "an Idea ?";
  const sectionRef = useRef(null);
  const haveRefs = useRef([]);
  const ideaRefs = useRef([]);

  // Helper to add refs to array
  const addToHaveRefs = (el) => {
    if (el && !haveRefs.current.includes(el)) {
      haveRefs.current.push(el);
    }
  };
  const addToIdeaRefs = (el) => {
    if (el && !ideaRefs.current.includes(el)) {
      ideaRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animate "Have"
    gsap.set(haveRefs.current, { y: 60, opacity: 0 });
    gsap.set(ideaRefs.current, { y: 60, opacity: 0 });

    ScrollTrigger.batch([haveRefs.current, ideaRefs.current], {
      trigger: sectionRef.current,
      start: "top 60%",
      once: true,
      onEnter: () => {
        gsap.to(haveRefs.current, {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.3,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        });
        gsap.to(ideaRefs.current, {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.3,
          delay: 0.3,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        });
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className='relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden '
    >
      <div className="z-[10] ">
        <h2 className={`md:text-7xl text-5xl lg:text-9xl font-light text-center ${theme.text === "text-black" ? "text-white" : theme.text} relative z-20`}>
          {[...have].map((char, idx) => (
            <span
              key={idx}
              ref={addToHaveRefs}
              style={{ display: "inline-block", willChange: "transform" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <h2
          className={`md:text-7xl text-5xl lg:text-9xl font-light text-center ${theme.text === "text-black" ? "text-white" : theme.text} relative z-20`}
        >
          {[...idea].map((char, idx) => (
            <span
              key={idx}
              ref={addToIdeaRefs}
              style={{ display: "inline-block", willChange: "transform" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <button className="relative flex my-10 rounded-full px-8 py-4 mx-auto items-center justify-center overflow-hidden bg-transparent border-1 border-white text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black/50 before:duration-300 before:ease-out hover:shadow-black/50 hover:before:h-full hover:before:w-full">
          <a target="_blank" href="https://wa.me/923022183767">          <span className="relative z-10 font-light w-full h-full rounded-3xl flex justify-center items-center text-4xl sm:text-6xl">Let's Discus</span>
          </a>
        </button>
      </div>
      <div className="back absolute top-0 left-0 w-full h-full backdrop-blur-md overflow-hidden">
        <video
          src="https://res.cloudinary.com/dzq61zzxb/video/upload/v1760310030/circle_y6m7x5.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/40"></div>
      </div>
    </div>
  );
};

export default Idea;

/*
import React, { useContext } from 'react';
import { ThemeContext } from '../Settings/ThemeProvider.jsx';
import { motion } from 'framer-motion';

const Idea = () => {
  const { theme } = useContext(ThemeContext);
  motion
  return (
    <div className='relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden '>
      <div className="z-[10] ">
        <motion.h2
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }} // 0.6 means 60% visible then animate
          className={`md:text-7xl text-5xl lg:text-9xl text-center ${theme.text == "text-black" ? "text-white" : theme.text} relative z-20`}
        >
          Have
        </motion.h2>
        <motion.h2
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
          className={`md:text-7xl text-5xl lg:text-9xl text-center ${theme.text == "text-black" ? "text-white" : theme.text} relative z-20`}
        >
          an Idea ?
        </motion.h2>
      </div>
      <div className="back absolute top-0 left-0 w-full h-full backdrop-blur-md overflow-hidden">
        <video
          src="/circle.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/50"></div>
      </div>
    </div>
  )
}

export default Idea
*/ 