import React, { useEffect, useState } from 'react';
import { db, doc, getDoc, setDoc, updateDoc } from '../Settings/firebaseConfig';
import { NumberTicker } from "../Components/magicui/number-ticker";
import { FaBullseye } from "react-icons/fa";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { IoShieldCheckmark } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";
import { LuBoxes } from "react-icons/lu";
import projectData from "../Settings/data.js";


const NumberTricker = () => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        const docRef = doc(db, 'stats', 'visitors');
        let isMounted = true;
        async function incrementVisitor() {
            try {
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const prev = docSnap.data().count || 0;
                    await updateDoc(docRef, { count: prev + 1 });
                    if (isMounted) setCount(prev + 1);
                } else {
                    await setDoc(docRef, { count: 1 });
                    if (isMounted) setCount(1);
                }
            } catch (error) {
                console.error('Error updating visitor count:', error);

                // fallback: don't update count
            }
        }
        incrementVisitor();
        return () => { isMounted = false; };
    }, []);
    return (
        <div className="relative overflow-hidden flex items-center flex-wrap gap-0 md:gap-10 justify-evenly bg-fixed bg-[url(https://images.unsplash.com/photo-1521247205284-f4f3c95fdb5a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8)] bg-no-repeat bg-center bg-cover h-40 py-5 sm:p-0 md:h-96 text-2xl font-bold">
            <div className="absolute top-0 left-0 bg-black -z-1 w-full h-full"></div>
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
                <BsDatabaseFillCheck className='text-white xl:text-8xl text-center' />
                <span className='text-lg sm:text-2xl  text-center text-white font-[Quicksand]'>Projects</span>
                <span className="whitespace-pre-wrap text-xl sm:text-4xl font-[Quicksand] text-center font-medium tracking-tighter text-white">
                    <NumberTicker
                        value={projectData.length}
                        className="whitespace-pre-wrap  text-xl sm:text-4xl  font-[Quicksand] text-center font-medium tracking-tighter text-white"
                    />+
                </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
                <IoShieldCheckmark className='text-white xl:text-8xl text-center' />
                <span className='text-lg sm:text-2xl  text-center text-white font-[Quicksand]'>Linkedin <br /> connections</span>
                <span className="whitespace-pre-wrap text-xl sm:text-4xl font-[Quicksand] text-center font-medium tracking-tighter text-white">
                    <NumberTicker
                        value={1750}
                        className="whitespace-pre-wrap  text-xl sm:text-4xl  font-[Quicksand] text-center font-medium tracking-tighter text-white"
                    />+
                </span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
                <FaBullseye className='text-white xl:text-8xl text-center' />
                <span className='text-lg sm:text-2xl  text-center text-white font-[Quicksand]'>Portfolio <br /> Visitors</span>
                <span className="whitespace-pre-wrap text-xl sm:text-4xl font-[Quicksand] text-center font-medium tracking-tighter text-white">
                    <NumberTicker
                        value={count || 48}
                        className="whitespace-pre-wrap  text-xl sm:text-4xl  font-[Quicksand] text-center font-medium tracking-tighter text-white"
                    />+
                </span>
            </div>

        </div>
    )
}

export default NumberTricker