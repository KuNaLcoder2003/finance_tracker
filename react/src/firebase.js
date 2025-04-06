import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwCt3s6K3wxQxTWxdXL6VEslv1oOg1zhc",
    authDomain: "finanacetracker-75299.firebaseapp.com",
    projectId: "finanacetracker-75299",
    storageBucket: "finanacetracker-75299.firebasestorage.app",
    messagingSenderId: "1085545688635",
    appId: "1:1085545688635:web:62db7ec1e92407fd42361e",
    measurementId: "G-BK8PVMMDV7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };