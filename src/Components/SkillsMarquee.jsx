
import {
    Marquee,
    MarqueeContent,
    MarqueeFade,
    MarqueeItem,
} from '../Components/ui/marquee.jsx';
const SkillsMarquee = ({ className }) => {

    const SkillsImgs = [
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307180/icon-reactJs_o63u7n.webp",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307182/icon-tailwind_otbsns.webp",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307186/icon-typescript_knxbxd.webp",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307177/icon-node_wlouhp.webp",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307144/icon-bootstrap_ehheth.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307176/icon-nextJs_epuhcm.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307176/icon-netlify_sski56.webp",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307177/icon-mongoDB_tawpas.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307186/icon-vite_kkaqea.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307174/icon-javascript_ujoygz.webp",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307173/icon-html_rxymtb.webp",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307180/icon-reactbootstrap_rihrva.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307898/default_dvunkr.webp",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307171/icon-githb_en0oc9.webp",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307169/icon-git_rvgx2n.webp",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307167/icon-Express_cekryd.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307168/icon-flowbite_g0ao0d.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307168/icon-flowbite_g0ao0d.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307144/icon-ES6_xprhxs.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307168/icon-figma_vjqimk.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307145/icon-canva_bwb21o.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307168/icon-fromerMotion_p1godq.png",
        "https://res.cloudinary.com/dzq61zzxb/image/upload/v1760307144/icon-css_eckevz.webp"
    ];
    return (
        <div id="skills" className={` size-full items-center justify-center bg-black ${className}`}>
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
                                loading="lazy"
                                decoding="async"
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
                                loading="lazy"
                                decoding="async"
                            />
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </div>
    );
};
export default SkillsMarquee;
