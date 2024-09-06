// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-4b0a5.firebaseapp.com",
  projectId: "reactchat-4b0a5",
  storageBucket: "reactchat-4b0a5.appspot.com",
  messagingSenderId: "1031042189010",
  appId: "1:1031042189010:web:c1d1298a7d9435b132cf0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()