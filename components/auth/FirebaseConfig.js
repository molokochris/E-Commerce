// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXQpFF1n301P_jpAk8Gxh2hYr1VdDy-Xg",
  authDomain: "e-commerce-284f2.firebaseapp.com",
  projectId: "e-commerce-284f2",
  storageBucket: "e-commerce-284f2.appspot.com",
  messagingSenderId: "652686747106",
  appId: "1:652686747106:web:dbc2cb357c6722f5af85bb"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firestore_db = getFirestore(firebase_app);