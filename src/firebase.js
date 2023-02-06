// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfR04lQgMo1kZk7IHp_FMsJcZseW6PHsg",
    authDomain: "netflix-clone-9e433.firebaseapp.com",
    projectId: "netflix-clone-9e433",
    storageBucket: "netflix-clone-9e433.appspot.com",
    messagingSenderId: "466322067667",
    appId: "1:466322067667:web:25be47d1e3863bece4c426",
    measurementId: "G-TSX8C1GBBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore()

export { app, auth, db }