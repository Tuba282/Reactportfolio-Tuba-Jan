
import { useEffect } from "react";
import { Timeline } from "./ui/timeline";
import AOS from 'aos';
import TextRevealEffect from "./TextAnimate";


const TimelineDemo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  //  data-aos="fade-up" data-aos-duration="1300" data-aos-easing="linear"
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl text-bold font-[heroMainHeadings] "> <TextRevealEffect text={'Pursuing BS-Computer Science at SMIU'} data-aos-duration="300" /></h2>
          <p
            className="my-4 text-gray-300  md:text-sm dark:text-neutral-200">

            <TextRevealEffect text={`I am currently pursuing a Bachelor of Science in Computer Science (BSCS) at Sindh Madressatul Islam University (SMIU). This program is helping me build a strong foundation in programming, software development, and emerging technologies to prepare for a successful career in the tech industry.`} data-aos-duration="1000" />

          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl text-bold font-[heroMainHeadings] "> <TextRevealEffect text={'Advancing in Full-Stack Development '} data-aos-duration="300" /></h2>
          <p
            className="my-4 text-gray-300  md:text-sm dark:text-neutral-200">

            <TextRevealEffect text={`Currently enrolled in the MERN Stack Development course at Saylani Mass IT Training (SMIT) to master full-stack web technologies.`} data-aos-duration="1000" />

          </p>
          <p
            className="mb-4 text-gray-300  md:text-sm dark:text-neutral-200">
            <TextRevealEffect text={`Gaining expertise in MongoDB, Express.js, React.js, and Node.js, enabling end-to-end development of modern applications.`} data-aos-duration="2000" />
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://ques-ans-frontend.vercel.app/" target="_blank">
              <img
                src="/QueryBoard.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover xl:object-fill shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>
            <a href="https://flacio-plantshop.vercel.app/" target="_blank">
              <img
                src="/Flacio.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover xl:object-fill shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>

            <a href="https://sr-towing-mocha.vercel.app/" target="_blank">
              <img
                src="/srTowing.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>
            <a href="https://react-keep-notes-app.netlify.app" target="_blank">
              <img
                src="/keepNotes.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover xl:object-fill shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>
            <a href="https://splyt-milk.netlify.app" target="_blank">
              <img
                src="/splytMilk.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>
            <a href="https://react-wander-land.netlify.app" target="_blank">
              <img
                src="/WanderLand.png"
                alt="startup template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl text-bold font-[heroMainHeadings]"><TextRevealEffect text={'Expanding into Emerging Technologies'} data-aos-duration="300" /></h2>
          <p
            className="my-4 text-gray-300  md:text-sm dark:text-neutral-200">
            <TextRevealEffect text={`Completed Intermediate at Bahria College Karachi NORE-I, `} data-aos-duration="900" />
            <TextRevealEffect text={`securing 2nd position in Computer Science with A+ grade.`} data-aos-duration="1400" />
            <TextRevealEffect text={` After words , Enrolled at GIAIC (Govt. Institute of Artificial Intelligence & Computing) with excellent grades.`} data-aos-duration="2000" />
            <TextRevealEffect text={` Studied cutting-edge technologies including Web 3.0, Blockchain, Artificial Intelligence, and Meta AI.`} data-aos-duration="2500" />
            <TextRevealEffect text={`Gained expertise in decentralized applications, smart contracts, and AI-driven automation.`} data-aos-duration="3000" />
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://ownshelf.vercel.app/" target="_blank">
              <img
                src="/OwnShelf.png"
                alt="hero template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>
            <a href="https://tuba-jan-resume.netlify.app" target="_blank">
              <img
                src="/ResumeBuilder.png"
                alt="feature template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>
            <a href="https://tuba-real-portfolio.vercel.app/" target="_blank">
              <img
                src="/TubaBluePortfolio.png"
                alt="bento template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>
            <a href="https://smartvibes.netlify.app" target="_blank">
              <img
                src="/SmartVibes.png"
                alt="cards template"
                width={500}
                height={500}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl text-bold font-[heroMainHeadings]"><TextRevealEffect text={`Intermediate with Computer Field`} data-aos-duration="300" /></h2>
          <p
            className="my-4 text-gray-300  md:text-sm dark:text-neutral-200">
            <TextRevealEffect text={`Completed studies at Bahria College Karachi NORE-I, securing 2nd position in the Computer Science field with an A+ grade.`} data-aos-duration="1000" />
            <TextRevealEffect text={`This achievement reflects dedication, analytical skills, and a deep understanding of programming and computational concepts.`} data-aos-duration="2500" />

          </p>

        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl text-bold font-[heroMainHeadings]"><TextRevealEffect text={`Matriculation Exams with Science`} data-aos-duration="300" /></h2>
          <p
            className="my-4 text-gray-300  md:text-sm dark:text-neutral-200">
            <TextRevealEffect text={`Graduated from Iqra Huffaz Secondary School with an A1 grade, demonstrating outstanding academic performance and a strong grasp of core subjects.`} data-aos-duration="1000" />
            <TextRevealEffect text={`Recognized as a brilliant student for consistent excellence.`} data-aos-duration="2500" />

          </p>

        </div>
      ),
    },
  ];
  return (
    <div id="about" className="relative w-full overflow-clip ">
      <Timeline data={data} />
    </div>
  );
}
export default TimelineDemo;