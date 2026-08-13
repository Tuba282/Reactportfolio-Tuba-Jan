

import React, { useState, useEffect } from "react";


import {
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";


import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import PressButton from "../PressButton";
import toast from 'react-hot-toast';


function ReviewForm({ onSuccess }) {


  const [, setMousePosition] = useState({ x: 0, y: 0 });
  // For 3D card effect - increased rotation range for more pronounced 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]); // Increased from 5/-5 to 10/-10
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]); // Increased from -5/5 to -10/10
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };


  const [user, setUser] = useState(null);
  const [rating, setRating] = useState();
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Ensure you are logged in to submit a review.');
      return;
    }

    if (rating < 1 || rating > 5 || review.trim() === '') {
      toast.error('Rating must be between 1 and 5, and review cannot be empty.');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'reviews'), {
        uid: user.uid,
        image: user.photoURL,
        email: user.email,
        name: user.displayName || 'Anonymous',
        rating,
        review,
        timestamp: new Date()
      });
      toast.success('Review submitted successfully!');
      setRating(0);
      setReview('');
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Error saving review:', error);
      toast.error('Error saving review. Please try again.');
    }
    setLoading(false);
  };

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full  max-w-sm relative overflow-hidden flex items-center justify-center"
      style={{ perspective: 1500 }}>

      <motion.div
        className="relative w-full h-full"
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative group">
          {/* Card glow effect - reduced intensity */}


          {/* Card border glow - reduced opacity */}
          <div className="absolute -inset-[0.5px] rounded-2xl bg-gradient-to-r from-white/3 via-white/7 to-white/3 opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Glass card background */}
          <div className="relative  bg-white/5 backdrop-blur-xl rounded-2xl cursor-pointer! p-6 border border-white/[0.05] shadow-2xl overflow-hidden">


            {/* Logo and header */}
            <div className="text-center space-y-1 mb-5 ">

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80">
                You Like it
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-black/60 text-xs">
                give it a review
              </motion.p>
            </div>

            <form
              onSubmit={handleSubmit}
              className=" text-black p-6 rounded-lg shadow-lg max-w-md mx-auto space-y-4"
            >

              <div>
                <label className="block mb-1 font-medium">Rating (1-5):</label>
                <input
                  type="text"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  required
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Review:</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows="4"
                  required
                  className="w-full px-3 py-2 border border-gray-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <PressButton type="submit" text={loading ? 'Submitting...' : 'Submit Review'} extraClasses={'p-2 w-full sm:p-3 md:p-4 text-lg cursor-pointer! sm:text-2xl md:text-4xl tracking-wider uppercase  mt-6'} />
            </form>


          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ReviewForm