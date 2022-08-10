// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHUkpWdXOICM6_oka9SsNWScuqAUm95hE",
  authDomain: "best-learning-tool-bd3a0.firebaseapp.com",
  projectId: "best-learning-tool-bd3a0",
  storageBucket: "best-learning-tool-bd3a0.appspot.com",
  messagingSenderId: "784855659403",
  appId: "1:784855659403:web:7ac0ff09b72481489eb58e",
  measurementId: "G-30KRCJDD9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
