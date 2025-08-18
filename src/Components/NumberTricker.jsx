import React, { useEffect, useState } from 'react';
import { db, doc, getDoc, setDoc, updateDoc } from '../Settings/firebaseConfig';
import { NumberTicker } from "../Components/magicui/number-ticker";

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
        <div className="relative flex items-center flex-wrap gap-10 justify-around bg-fixed bg-[url(https://images.unsplash.com/photo-1521247205284-f4f3c95fdb5a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8)] bg-no-repeat bg-center bg-cover h-96 text-2xl font-bold">
            <div className="absolute top-0 left-0 bg-black/80 -z-1 w-full h-full"></div>
            <div className="grid justify-center items-center gap-4">
                <span className='text-5xl text-center text-white font-[Quicksand]'>Projects</span>
                <span className="whitespace-pre-wrap text-8xl  font-[Quicksand] text-center font-medium tracking-tighter text-white">
                    <NumberTicker
                        value={31}
                        className="whitespace-pre-wrap  font-[Quicksand] text-8xl text-center font-medium tracking-tighter text-white"
                    />+
                </span>
            </div>
            <div className="grid justify-center items-center gap-4">
                <span className='text-5xl text-center text-white font-[Quicksand]'>Linkedin <br /> connections</span>
                <span className="whitespace-pre-wrap text-8xl  font-[Quicksand] text-center font-medium tracking-tighter text-white">
                    <NumberTicker
                        value={1345}
                        className="whitespace-pre-wrap  font-[Quicksand] text-8xl text-center font-medium tracking-tighter text-white"
                    />+
                </span>
            </div>
            <div className="grid justify-center items-center gap-4">
                <span className='text-5xl text-center text-white font-[Quicksand]'>Portfolio <br /> Visitors</span>
                <span className="whitespace-pre-wrap text-8xl  font-[Quicksand] text-center font-medium tracking-tighter text-white">
                    <NumberTicker
                        value={count || 48}
                        className="whitespace-pre-wrap  font-[Quicksand] text-8xl text-center font-medium tracking-tighter text-white"
                    />+
                </span>
            </div>

        </div>
    )
}

export default NumberTricker