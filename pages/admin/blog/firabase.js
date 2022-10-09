import { initializeApp } from "firebase/app"; // inicializar app
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; //conexion cloud firebase database
import { getStorage } from "firebase/storage"; // conexion cloud firebase storage imagen y video
import {getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

//bloque de key para el acceso a firestor
const firebaseConfig = {
    apiKey: "AIzaSyCiAAHQloezsZIqRMSXcV1tXRFW4YFKPYs",
    authDomain: "personasenblog.firebaseapp.com",
    projectId: "personasenblog",
    storageBucket: "personasenblog.appspot.com",
    messagingSenderId: "816066215946",
    appId: "1:816066215946:web:5bfe5be97943b0471a9ff3",
    measurementId: "G-Z8QD1W5YVT"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// conexion a la base de datos firestore
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
