// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbsy5cKKmv0y4SaL4iqKYRtCfPmbV3t2Y",
  authDomain: "parcial2-9ba8f.firebaseapp.com",
  projectId: "parcial2-9ba8f",
  storageBucket: "parcial2-9ba8f.firebasestorage.app",
  messagingSenderId: "644483028126",
  appId: "1:644483028126:web:4eee16112be8c27448178f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export { auth, app, db };