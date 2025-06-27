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
  apiKey: "AIzaSyB-Zp9DFTAluyEOqtaDLae3E65DTIbhXgs",
  authDomain: "expense-tracker-754a1.firebaseapp.com",
  projectId: "expense-tracker-754a1",
  storageBucket: "expense-tracker-754a1.firebasestorage.app",
  messagingSenderId: "333667850682",
  appId: "1:333667850682:web:6a56d6064f5b5d302a2583",
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
