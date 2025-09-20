import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
  onSnapshot,
  getDocs,
  getDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwZFRfpY5kjNyHg5vmM-nRuYN90ZRgQf8",
  authDomain: "tuba-portfolio.firebaseapp.com",
  projectId: "tuba-portfolio",
  storageBucket: "tuba-portfolio.firebasestorage.app",
  messagingSenderId: "758400356126",
  appId: "1:758400356126:web:258b77895c72525d3e830f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
  db,
  doc,
  setDoc,
  serverTimestamp,
  addDoc,
  collection,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateDoc,
  onSnapshot,
  getDocs,
  getDoc,
  query,
  where,
  deleteDoc,
};
