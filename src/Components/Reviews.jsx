import { useEffect, useState, useMemo, useRef } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { motion } from "framer-motion";
import PressButton from "./PressButton";
import { FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


// form imports
import Modal from '@mui/material/Modal';

import SingInForm from "./nurui/singinForm";
import ReviewForm  from "./nurui/reviewForm";
import Loader from './Loader';
import toast from 'react-hot-toast';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const db = getFirestore();

    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let time = 0;
        const waveData = Array.from({ length: 8 }).map(() => ({
            value: Math.random() * 0.5 + 0.1,
            targetValue: Math.random() * 0.5 + 0.1,
            speed: Math.random() * 0.02 + 0.01,
        }));
        function resizeCanvas() {
            if (!canvas) return;
            const container = canvas.parentElement;
            if (container) {
                canvas.width = container.clientWidth;
                canvas.height = container.clientHeight;
            }
        }
        function updateWaveData() {
            waveData.forEach((data) => {
                if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
                const diff = data.targetValue - data.value;
                data.value += diff * data.speed;
            });
        }
        function draw() {
            if (!canvas || !ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Removed background color
            waveData.forEach((data, i) => {
                const freq = data.value * 7;
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x++) {
                    const nx = (x / canvas.width) * 2 - 1;
                    const px = nx + i * 0.04 + freq * 0.03;
                    const py =
                        Math.sin(px * 10 + time) *
                        Math.cos(px * 2) *
                        freq *
                        0.1 *
                        ((i + 1) / 8);
                    const y = ((py + 1) * canvas.height) / 2;
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                const intensity = Math.min(1, freq * 0.3);
                const r = 79 + intensity * 100;
                const g = 70 + intensity * 130;
                const b = 229;
                ctx.lineWidth = 1 + i * 0.3;
                ctx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
                ctx.shadowColor = `rgba(${r},${g},${b},0.5)`;
                ctx.shadowBlur = 5;
                ctx.stroke();
                ctx.shadowBlur = 0;
            });
        }
        function animate() {
            time += 0.02;
            updateWaveData();
            draw();
            requestAnimationFrame(animate);
        }
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        animate();
        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);


    motion


    // Fetch reviews from firestore
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'reviews'));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setReviews(data);
                // console.log(data);
                
            } catch (error) {
                console.error('Error fetching reviews:', error);
                toast.error('Error fetching reviews. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, [db]);

    // Pagination & Search
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const cardsPerPage = 9;

    const filteredData = useMemo(() =>
        reviews.filter(
            (item) =>
                item.name?.toLowerCase().includes(search.toLowerCase()) ||
                item.review?.toLowerCase().includes(search.toLowerCase())
        ),
        [search, reviews]
    );

    const totalPages = Math.ceil(filteredData.length / cardsPerPage);
    const paginatedData = useMemo(() =>
        filteredData.slice((page - 1) * cardsPerPage, page * cardsPerPage),
        [filteredData, page]
        
    );

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    // Authentication state
    const [user, setUser] = useState(null);
    const [formModal, setFormModal] = useState(false);
    const [reviewModal, setReviewModal] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleOpen = () => {
        if (user) {
            setReviewModal(true);
        } else {
            setFormModal(true);
        }
    };
    const handleClose = () => {
        setReviewModal(false);
        setFormModal(false);
    };

    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    // helper function for formatting timestamp
    const formatTimestamp = (timestamp) => {
        if (!timestamp) return "";
        if (timestamp.toDate) {
            return timestamp.toDate().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
            });
        }
        if (timestamp.seconds) {
            return new Date(timestamp.seconds * 1000).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
            });
        }
        return "";
    };


    return (
        <div id='reviews' className='relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden p-3 sm:p-5'>

            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
                style={{ background: "transparent" }}
            />
            <div
                className="w-full h-full animate-pulse pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "15px 15px",
                }}
            />
            {/* Search Bar */}
            <div className="w-full grid sm:flex justify-between mb-4 items-center gap-4 sm:px-10 md:px-15 px-2">
                <div className="flex w-full md:w-[50%] items-center gap-2">
                    <h2 className="flex items-center gap-2 text-xl lg:text-4xl leading-relaxed text-balance font-[sora] text-white/80"> <IoIosSearch />Search</h2>
                    <input
                        type="text"
                        value={search}
                        name="search-bar"
                        onChange={handleSearch}
                        placeholder="i.e Ayesha..."
                        className="relative z-20 p-4 ms-2 border-b-2 bg-transparent border-white text-white  leading-relaxed"
                    />



                </div>
                <span onClick={handleOpen} className='self-end mt-2 sm:mt-0'>
                    <PressButton onClick={handleOpen} text={'Write a Review'} extraClasses={'p-3'} />
                </span>
            </div>

            {/* Reviews Grid */}
            <section class="py-20">
                <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto ">


                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8  ">

                        {loading ? (
                            <div className="col-span-full flex justify-center items-center min-h-[160px]">
                                <Loader />
                            </div>
                        ) : paginatedData.length > 0 ? (
                            chunkArray(paginatedData, 3).map((group, groupIndex) => (
                                <div key={groupIndex}>
                                    {/* First review - always visible */}
                                    {group[0] && (
                                        <ul className="space-y-8">
                                            <li className="text-sm leading-6">
                                                <div className="relative group">
                                                    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                                    <div className="relative p-6 my-4 space-y-6 leading-none rounded-lg bg-slate-950 ring-1 ring-gray-900/5">
                                                        <div className="flex items-center space-x-4">
                                                            <img
                                                                src={`/user.png`}
                                                                // src={group[1].image || `/user.png`}
                                                                alt={group[0].name}
                                                                className="w-14 h-14 border-2 bg-center bg-cover border-white/70 rounded-xl"
                                                            />
                                                            <div>
                                                                <h3 className="text-lg font-semibold text-white capitalize">
                                                                    {group[0].name}
                                                                </h3>
                                                                <div className="flex justify-start items-center mb-2">
                                                                    {[...Array(group[0].rating)].map((_, i) => (
                                                                        <FaStar key={i} className="text-yellow-400 mx-0.5 text-sm sm:text-base" />
                                                                    ))}
                                                                </div>
                                                                <p className="text-gray-500 text-md">
                                                                    {formatTimestamp(group[0].timestamp)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="leading-normal text-gray-400 text-lg">
                                                            {group[0].review}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    )}

                                    {/* Second review - visible on sm+ */}
                                    {group[1] && (
                                        <ul className="hidden space-y-8 sm:block">
                                            <li className="text-sm leading-6">
                                                <div className="relative group">
                                                    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-200 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                                    <div className="relative p-6  my-4 space-y-6 leading-none rounded-lg bg-slate-950 ring-1 ring-gray-900/5">
                                                        <div className="flex items-center space-x-4">
                                                            <img
                                                                src={`/user.png`}
                                                                // src={group[1].image || `/user.png`}
                                                                alt={group[1].name}
                                                                className="w-14 h-14 border-2 bg-center bg-cover border-white/70 rounded-xl"
                                                            />
                                                            <div>
                                                                <h3 className="text-lg font-semibold text-white capitalize">
                                                                    {group[1].name}
                                                                </h3>
                                                                <div className="flex justify-start items-center mb-2">
                                                                    {[...Array(group[1].rating)].map((_, i) => (
                                                                        <FaStar key={i} className="text-yellow-400 mx-0.5 text-sm sm:text-base" />
                                                                    ))}
                                                                </div>
                                                                <p className="text-gray-500 text-md">
                                                                    {formatTimestamp(group[1].timestamp)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="leading-normal text-gray-400 text-lg">
                                                            {group[1].review}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    )}

                                    {/* Third review - visible on lg+ */}
                                    {group[2] && (
                                        <ul className="hidden space-y-8 lg:block">
                                            <li className="text-sm leading-6">
                                                <div className="relative group">
                                                    <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-blue-200 via-blue-600 to-blue-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                                                    <div className="relative p-6  my-4 space-y-6 leading-none rounded-lg bg-slate-950 ring-1 ring-gray-900/5">
                                                        <div className="flex items-center space-x-4">
                                                            <img
                                                                src={`/user.png`}
                                                                // src={group[2].image || `/user.png`}
                                                                alt={group[2].name}
                                                                className="w-14 h-14 border-2 bg-center bg-cover border-white/70 rounded-xl"
                                                            />
                                                            <div>
                                                                <h3 className="text-lg font-semibold text-white capitalize">
                                                                    {group[2].name}
                                                                </h3>
                                                                <div className="flex justify-start items-center mb-2">
                                                                    {[...Array(group[2].rating)].map((_, i) => (
                                                                        <FaStar key={i} className="text-yellow-400 mx-0.5 text-sm sm:text-base" />
                                                                    ))}
                                                                </div>
                                                                <p className="text-gray-500 text-md">
                                                                    {formatTimestamp(group[2].timestamp)}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="leading-normal text-gray-400 text-lg">
                                                            {group[2].review}
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full flex justify-center items-center py-8">
                                <p className="text-white/70 text-center text-xl md:text-3xl lg:text-5xl font-[sora]">
                                    No Reviews Found.
                                </p>
                            </div>
                        )}



                    </div>
                </div>
            </section>
            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center gap-2 my-7">
                    <span onClick={() => setPage((p) => Math.max(1, p - 1))}>
                        <PressButton text={'<'} extraClasses={'p-3 font-extrabold'} />
                        {/* <FaChevronLeft /> */}
                    </span>
                    <span className="px-2 py-1 flex justify-center items-center font-[Quicksand] text-white">
                        Page {page} of {totalPages}
                    </span>
                    <span onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
                        <PressButton text={'>'} extraClasses={'p-3 font-extrabold'} />
                        {/* <FaChevronRight /> */}
                    </span>
                </div>
            )}

            {/* Button to Open Modal */}
            {/* <PressButton onClick={handleOpen} text={'Write a Review'} extraClasses={'p-3'} /> */}


            {/* Sign In Modal */}
            <Modal
                open={formModal}
                onClose={handleClose}
                className="flex justify-center items-center"
            >
                <div className="bg-white rounded-xl p-6">
                    <SingInForm onSuccess={() => setReviewModal(true)} />
                </div>
            </Modal>

            {/* Review Modal */}
            <Modal
                open={reviewModal}
                onClose={handleClose}
                className="flex justify-center items-center"
            >
                <div className="bg-white rounded-xl p-6">
                    <ReviewForm onSuccess={handleClose} />
                </div>
            </Modal>

        </div>
    );
};

export default Reviews;


/*
// <WaveCard
                                //     key={review.id}
                                //     name={review.name}
                                //     photoURL={review.image}
                                //     review={review.review}
                                //     rating={review.rating}
                                //     timestamp={review.timestamp}
                                // />
*/ 