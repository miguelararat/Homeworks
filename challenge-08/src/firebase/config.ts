// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC42Ea4Cru9I7GTC9BtlnxkblWtBgHqnCQ",
  authDomain: "chalenge-9.firebaseapp.com",
  projectId: "chalenge-9",
  storageBucket: "chalenge-9.firebasestorage.app",
  messagingSenderId: "223103121909",
  appId: "1:223103121909:web:88d4c400407ce9374408bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { app, auth, db };