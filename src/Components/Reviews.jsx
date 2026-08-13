import { useEffect, useMemo, useRef, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AnimatePresence, motion } from 'motion/react';
import { FaStar } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import PressButton from './PressButton';
import SingInForm from './nurui/singinForm';
import ReviewForm from './nurui/reviewForm';
import Loader from './Loader';
import toast from 'react-hot-toast';

const ReviewCard = ({ review, formatTimestamp }) => {
    const rating = Math.min(5, Math.max(0, Number(review.rating) || 0));

    return (
        <article className="review-card-shell">
            <div className="review-card">
                <div className="review-avatar-wrap">
                    <img
                        src="/user.png"
                        alt={review.name || 'Reviewer'}
                        className="review-avatar"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <div className="review-card-content">
                    <h3>{review.name || 'Anonymous reviewer'}</h3>
                    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
                        {[...Array(rating)].map((_, index) => (
                            <FaStar key={index} />
                        ))}
                    </div>
                    <p className="review-date">{formatTimestamp(review.timestamp)}</p>
                    <p className="review-copy">{review.review}</p>
                </div>
                <span className="review-card-badge">Verified review</span>
            </div>
        </article>
    );
};

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [user, setUser] = useState(null);
    const [formModal, setFormModal] = useState(false);
    const [reviewModal, setReviewModal] = useState(false);
    const canvasRef = useRef(null);
    const db = getFirestore();
    const cardsPerPage = 9;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return undefined;
        const ctx = canvas.getContext('2d');
        if (!ctx) return undefined;
        let frameId = 0;
        let time = 0;
        const waveData = Array.from({ length: 8 }, () => ({
            value: Math.random() * 0.5 + 0.1,
            targetValue: Math.random() * 0.5 + 0.1,
            speed: Math.random() * 0.02 + 0.01,
        }));
        const resizeCanvas = () => {
            const container = canvas.parentElement;
            if (!container) return;
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            waveData.forEach((data, index) => {
                if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
                data.value += (data.targetValue - data.value) * data.speed;
                const frequency = data.value * 7;
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x += 2) {
                    const normalizedX = (x / canvas.width) * 2 - 1;
                    const pointX = normalizedX + index * 0.04 + frequency * 0.03;
                    const pointY = Math.sin(pointX * 10 + time) * Math.cos(pointX * 2) * frequency * 0.1 * ((index + 1) / 8);
                    const y = ((pointY + 1) * canvas.height) / 2;
                    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                }
                const intensity = Math.min(1, frequency * 0.3);
                const color = `rgba(${79 + intensity * 100}, ${110 + intensity * 100}, 229, 0.45)`;
                ctx.lineWidth = 1 + index * 0.3;
                ctx.strokeStyle = color;
                ctx.shadowColor = color;
                ctx.shadowBlur = 5;
                ctx.stroke();
                ctx.shadowBlur = 0;
            });
            time += 0.02;
            frameId = requestAnimationFrame(draw);
        };
        resizeCanvas();
        draw();
        window.addEventListener('resize', resizeCanvas);
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'reviews'));
                setReviews(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error('Error fetching reviews:', error);
                toast.error('Error fetching reviews. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, [db]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), setUser);
        return () => unsubscribe();
    }, []);

    const filteredReviews = useMemo(() => {
        const query = search.toLowerCase();
        return reviews.filter((review) => review.name?.toLowerCase().includes(query) || review.review?.toLowerCase().includes(query));
    }, [reviews, search]);
    const totalPages = Math.ceil(filteredReviews.length / cardsPerPage);
    const visibleReviews = filteredReviews.slice((page - 1) * cardsPerPage, page * cardsPerPage);

    const formatTimestamp = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : timestamp.seconds ? new Date(timestamp.seconds * 1000) : null;
        return date ? date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
    };
    const handleOpen = () => user ? setReviewModal(true) : setFormModal(true);
    const handleClose = () => {
        setReviewModal(false);
        setFormModal(false);
    };

    return (
        <section id="reviews" className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#080914] px-3 py-10 sm:px-5 md:py-16">
            <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 h-full w-full" />
            <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:15px_15px]" />
            <div className="relative z-10 flex w-full max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <label className="flex w-full items-center gap-3 text-xl font-semibold text-white/90 sm:max-w-md lg:text-3xl">
                    <IoIosSearch />
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => { setSearch(event.target.value); setPage(1); }}
                        placeholder="Search reviews"
                        className="min-w-0 flex-1 border-b border-white/40 bg-transparent px-1 py-3 text-base font-normal text-white outline-none transition-colors placeholder:text-white/40 focus:border-sky-300"
                    />
                </label>
                <PressButton onClick={handleOpen} text="Write a Review" extraClasses="p-3" />
            </div>
            <div className="relative z-10 mt-10 grid w-full max-w-6xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {loading ? (
                    <div className="col-span-full flex min-h-[240px] items-center justify-center"><Loader /></div>
                ) : visibleReviews.length ? (
                    visibleReviews.map((review) => <ReviewCard key={review.id} review={review} formatTimestamp={formatTimestamp} />)
                ) : (
                    <p className="col-span-full py-10 text-center font-[sora] text-xl text-white/70 sm:text-3xl">No Reviews Found.</p>
                )}
            </div>
            {totalPages > 1 && (
                <div className="relative z-10 my-10 flex items-center gap-3 text-white">
                    <PressButton onClick={() => setPage((current) => Math.max(1, current - 1))} text="<" extraClasses="p-3 font-extrabold" />
                    <span>Page {page} of {totalPages}</span>
                    <PressButton onClick={() => setPage((current) => Math.min(totalPages, current + 1))} text=">" extraClasses="p-3 font-extrabold" />
                </div>
            )}
            <AnimatePresence>
                {formModal && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                        <div className="max-h-[90vh] max-w-full overflow-auto rounded-xl bg-white p-6" onClick={(event) => event.stopPropagation()}><SingInForm onSuccess={() => { setFormModal(false); setReviewModal(true); }} /></div>
                    </motion.div>
                )}
                {reviewModal && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                        <div className="max-h-[90vh] max-w-full overflow-auto rounded-xl bg-white p-6" onClick={(event) => event.stopPropagation()}><ReviewForm onSuccess={handleClose} /></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Reviews;
