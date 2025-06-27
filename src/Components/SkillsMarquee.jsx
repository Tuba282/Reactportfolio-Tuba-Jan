
import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from '../Components/ui/marquee.jsx';
const SkillsMarquee = ({ className }) => {

    const SkillsImgs = [
        "/icon-reactJs.webp",
        "/icon-tailwind.webp",
        "/icon-typescript.webp",
        "/icon-node.webp",
        "/icon-bootstrap.png",
        "/icon-nextJs.png",
        "/icon-netlify.webp",
        "/icon-mongoDB.png",
        "/icon-vite.png",
        "/icon-javascript.webp",
        "/icon-html.webp",
        "/icon-reactbootstrap.png",
        "/default.webp",
        "/icon-githb.webp",
        "/icon-git.webp",
        "/icon-Express.png",
        "/icon-flowbite.png",
        "/icon-ES6.png",
        "/icon-figma.png",
        "/icon-canva.png",
        "/icon-fromerMotion.png",
        "/icon-css.webp"
    ];
    return (
        <div  id="skills" className={` size-full items-center justify-center bg-black ${className}`}>
            {/* Marquee moving right (default) */}
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent direction="right">
                    {SkillsImgs.map((item, index) => (
                        <MarqueeItem key={index} className="h-32 w-32 mt-10">
                            <img
                                src={item}
                                alt={`Placeholder ${index}`}
                                className="overflow-hidden "
                            />
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
            {/* Marquee moving left */}
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent direction="left">
                    {SkillsImgs.map((item, index) => (
                        <MarqueeItem key={index} className="h-32 w-32 mt-10">
                            <img
                                src={item}
                                alt={`Placeholder ${index}`}
                                className="overflow-hidden "
                            />
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </div>
    );
};
export default SkillsMarquee;
