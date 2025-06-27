import { useEffect, useState } from 'react';
import { db, doc, getDoc, setDoc, updateDoc } from '../Settings/firebaseConfig';

// Firestore document path: 'stats/visitors'
export default function useVisitorCount() {
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
  return count;
}
