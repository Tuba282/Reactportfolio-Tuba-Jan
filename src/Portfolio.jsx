import Hero from './Components/Hero'
import KnowMe from './Components/KnowMe'
import TimelineDemo from './Components/About'
import { SparklesPreview } from './Components/SparkelsAboutMe'
import Idea from './Components/Idea'
import 'aos/dist/aos.css';
import { SmoothCursor } from "./Components/smooth-cursor";
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
            <NumberTricker />
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
            <Awards />
            <Idea />
            <SmoothCursor />
        </>
    )
}

export default Portfolio
