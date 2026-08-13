import { lazy, Suspense } from 'react'
import Hero from './Components/Hero'
import KnowMe from './Components/KnowMe'
import { SparklesPreview } from './Components/SparkelsAboutMe'
import NumberTricker from './Components/NumberTricker'

const TimelineDemo = lazy(() => import('./Components/About'))
const BentoGrid = lazy(() => import('./Components/ui/BentoGrid'))
const Testimonials = lazy(() => import('./Components/Testimonials').then(m => ({ default: m.Testimonials })))
const SkillsMarquee = lazy(() => import('./Components/SkillsMarquee'))
const Awards = lazy(() => import('./Components/Awards'))
const Reviews = lazy(() => import('./Components/Reviews'))
const Idea = lazy(() => import('./Components/Idea'))

const SectionLoader = () => (
    <div className="min-h-[200px] w-full flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
)

const Portfolio = () => {
    return (
        <>
            <Hero />
            <KnowMe />
            <NumberTricker />
            <SparklesPreview text={"About Me"} />
            <Suspense fallback={<SectionLoader />}>
                <TimelineDemo />
            </Suspense>
            <div className='hidden sm:block'>
                <SparklesPreview text={"Projects"} />
                <Suspense fallback={<SectionLoader />}>
                    <BentoGrid />
                </Suspense>
            </div>
            <SparklesPreview text={"Testimonial"} />
            <Suspense fallback={<SectionLoader />}>
                <Testimonials />
            </Suspense>
            <SparklesPreview text={"Skills"} />
            <Suspense fallback={<SectionLoader />}>
                <SkillsMarquee className={' my-5 sm:my-20 md:my-30'} />
            </Suspense>
            <SparklesPreview text={"Certificates"} />
            <Suspense fallback={<SectionLoader />}>
                <Awards />
            </Suspense>
            <SparklesPreview text={"Reviews"} />
            <Suspense fallback={<SectionLoader />}>
                <Reviews />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
                <Idea />
            </Suspense>
        </>
    )
}

export default Portfolio
