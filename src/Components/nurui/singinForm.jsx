

import React, { useState } from "react";
import { auth, db, GoogleAuthProvider } from "../../Settings/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import toast from 'react-hot-toast';
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
function SingInForm({ onSuccess }) {
  motion
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user to Firestore
      await setDoc(doc(db, "portfolioVisitors", user.uid), {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        uid: user.uid,
        createdAt: serverTimestamp(),
      });

      console.log("User signed in:", user);
      toast.success('Successfully signed in!');
      if (onSuccess) onSuccess()
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      toast.error(`Sign-in failed: ${error.message}`);
    }
  };
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
  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full  max-w-md relative overflow-hidden flex items-center justify-center"
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
          <div className="absolute -inset-[0.5px] rounded-2xl bg-gradient-to-r from-black/3 via-black/7 to-black/3 opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Glass card background */}
          <div className="relative  bg-black/5 backdrop-blur-xl rounded-2xl cursor-pointer! p-6 border border-black/[0.05] shadow-2xl overflow-hidden">


            {/* Logo and header */}
            <div className="text-center space-y-1 mb-5 ">

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80">
                Welcome
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-black/60 text-xs">
                Sign in to continue
              </motion.p>
            </div>


            {/* Google Sign In */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full relative group/google cursor-pointer!">
              <div className="absolute inset-0 bg-black/5 rounded-lg blur opacity-0 group-hover/google:opacity-70 transition-opacity duration-300" />

              <div className="relative overflow-hidden bg-black/5 px-2 text-black font-medium h-10 rounded-lg border border-black/10 hover:border-black/20 transition-all duration-300 flex items-center justify-center gap-2">
                {/* <!-- SVG_GOOGLE_LOGO --> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 48 48">
                  <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" strokeWidth="0.3" stroke="#ffc107" />
                  <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" strokeWidth="0.3" stroke="#ff3d00" />
                  <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" strokeWidth="0.3" stroke="#4caf50" />
                  <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" strokeWidth="0.3" stroke="#1976d2" />
                </svg>

                <span className="text-black/80 group-hover/google:text-black transition-colors text-xs">
                  Sign in with Google
                </span>

                {/* Button hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/5 to-black/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.button>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SingInForm