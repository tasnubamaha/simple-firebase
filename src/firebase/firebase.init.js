// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP8DA4h1DgwTY8t_9z70ghcvzrFKA6TyA",
  authDomain: "simple-firebase-b29f3.firebaseapp.com",
  projectId: "simple-firebase-b29f3",
  storageBucket: "simple-firebase-b29f3.appspot.com",
  messagingSenderId: "699179949002",
  appId: "1:699179949002:web:3ff55f517885508a2acd33",
  measurementId: "G-4D2H156XB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;