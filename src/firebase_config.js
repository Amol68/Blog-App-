// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth' 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVJJ1zNuYTGUTOkDcyJXUCYsKDPpu2aho",
  authDomain: "blog-project-660e7.firebaseapp.com",
  projectId: "blog-project-660e7",
  storageBucket: "blog-project-660e7.appspot.com",
  messagingSenderId: "311550774351",
  appId: "1:311550774351:web:751059c55d62b8eda2ae3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();