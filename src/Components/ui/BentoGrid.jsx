
import { Link } from 'react-router-dom';
import PressButton from '../PressButton';
import { Div } from './moving-border';


const items = [
    { id: "0", cover: "/srTowingCover.png", link: "https://sr-towing-mocha.vercel.app/", img: "/srTowing.png", title: 'SR Towing', desc: 'SR Towing Services offers reliable towing and roadside assistance for all vehicle types. Whether you need emergency towing, jump-starts, tire changes, or fuel delivery, SR Towing is available 24/7. The website provides clear service details, contact information, and an easy way to get help when you need it most.', type: 'discount' },
    { id: "1", cover: "/alibabaCover.jpg", link: "https://ali-baba-landing-page-css.netlify.app/", img: "/alibaba.png", title: 'Ali Baba - Discover the World of Exclusive Products', desc: 'Ali Baba Landing Page showcases a modern and clean design that highlights premium products. With an engaging layout, it aims to attract customers by providing clear product descriptions, a prominent call-to-action, and a sleek user experience. This landing page focuses on user engagement and encourages exploration of exclusive offers.', type: 'font' },
    { id: "2", cover: "/wanderLandCover.png", link: "https://react-wander-land.netlify.app", img: "/WanderLand.png", title: 'Logo Sign', desc: 'Brand signage for office or store.Brand signage for office or store.', type: 'sign' },
    { id: "3", cover: "/yumCornerCover.jpg", link: "https://yumcorner.netlify.app", img: "/yumCorner.png", title: 'App Icon', desc: 'Mobile app icon preview.Mobile app icon preview.Mobile app icon preview.', type: 'app' },
    { id: "4", cover: "/Ochi.DesignCover.png", link: "https://ochideesign.netlify.app/", img: "/Ochi.Design.png", title: 'Brand Pattern', desc: 'Brand pattern with green spheres.Brand pattern with green spheres.', type: 'pattern' },
    { id: "5", cover: "/quizAppCove.png", link: "quiz-app-js-pro-09.netlify.app", img: "/quizApp.png", title: 'Quiz App - Sharpen Your Skills, One Question at a Time', desc: 'Quiz App is an interactive platform where users can test their knowledge through engaging multiple-choice questions. The app features a simple and intuitive interface, instant feedback, and a final score to help users track their progress.', type: 'billboard' },
    { id: "6", cover: "/getGoldCover.png", link: "https://sr-towing-mocha.vercel.app/", img: "/getGold.png", title: 'Get Gold - Your Premium Gold Collection Awaits', desc: 'Get Gold is a sleek landing page design showcasing a premium offer for gold products. It features a modern layout, elegant typography, and a call-to-action to engage visitors. The website focuses on promoting exclusive deals and capturing user interest through its visually appealing design.', type: 'bottle' },
    { id: "7", cover: "/inBlue.webp", link: "https://tuba-real-portfolio.vercel.app/", img: "/TubaBluePortfolio.png", title: '', desc: '', type: 'bottle' },
    { id: "8", cover: "/tambaCover.png", link: "https://tamba-cs-assignment.netlify.app/", img: "/tamba.png", title: 'Tamba The Ultimate Story - A Showcase of Clean & Responsive Web Design', desc: 'Tamba Story demonstrates a simple, clean, and responsive web layout created for a computer science project. It features a modern aesthetic, smooth navigation, and a minimalist color scheme, showcasing web design fundamentals with an educational purpose.', type: 'slogan' },
    { id: "9", cover: "/keepNotesCover.png", link: "https://react-keep-notes-app.netlify.app", img: "/keepNotes.png", title: '', desc: '', type: 'logo' },
    { id: "10", cover: "/OwnShelfCover.png", link: "https://ownshelf.vercel.app/", img: "/OwnShelf.png", title: 'Billboard', desc: 'Connecting Ideas, Empowering Innovation', type: 'logo' },
];

const BentoGrid = () => {

    return (
        <div  id="bentoGrid"  className="flex flex-col justify-center items-center min-h-screen bg-black">
            <div
                className="flex flex-wrap md:grid grid-flow-row-dense  grid-cols-1  md:grid-cols-3 xl:grid-cols-4 gap-6 p-5 md:p-10 xl:py-8 xl:px-20  w-full max-w-[1550px]"
                style={{ gridAutoRows: 'minmax(140px, 1fr 1fr)' }}
            >
                {items.map((item, idx) => (

                    <Div
                        key={idx}
                        className={`relative group flex flex-col justify-between transition-transform min-h-[140px] `}
                        style={{
                            gridColumn:
                                item.type === 'billboard' ? 'span 2' :
                                    item.type === 'logo' ? 'span 2' :
                                        undefined,
                            gridRow:
                                item.type === 'billboard' ? 'span 2' :
                                    undefined,
                        }}
                    >
                        <div className={`relative w-full ${idx == 5 ? 'h-full' : 'h-[250px]'} rounded transition-all duration-300 ease-in-out group-hover:scale-105 overflow-hidden`}>

                            <img
                                src={item.cover}
                                alt=""
                                className="absolute inset-0 drop-shadow-sm/50 rounded h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />

                            <img
                                src={item.img} alt=""
                                className="absolute inset-0 rounded  h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <a href={item.link} target="_blank">
                            <div className="absolute inset-0 flex flex-col items-start justify-between p-3 opacity-1000 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                                {/* <h3 className={`${item.id == 9 || item.id == 7 ? "text-black" : ""} text-xl font-thin font-[heroMainHeadings] mb-2`}>
                                    {item.title}
                                </h3>
                                <p className={`${item.id == 9 || item.id == 7 ? "text-black" : "text-gray-300"}  text-sm mb-2`}>{item.desc.slice(0, 100)} ...</p> */}
                            </div></a>
                    </Div>
                ))}
            </div>
            <Link to={'/projects'}><PressButton text={'View More'} extraClasses={'p-3'}/></Link>
        </div>
    );
};

export default BentoGrid;

