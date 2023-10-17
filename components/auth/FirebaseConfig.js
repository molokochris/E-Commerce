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
  apiKey: "AIzaSyByT6TGgZdFny7A1XBFXMlAzo29tA4qx-w",
  authDomain: "ecommerce-app-9ecb8.firebaseapp.com",
  projectId: "ecommerce-app-9ecb8",
  storageBucket: "ecommerce-app-9ecb8.appspot.com",
  messagingSenderId: "280660234920",
  appId: "1:280660234920:web:e7de8c84439f080c14a89d",
  measurementId: "G-SLXHC5PBYG"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firestore_db = getFirestore(firebase_app);