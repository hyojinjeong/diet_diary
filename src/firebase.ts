// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
  // apiKey: "AIzaSyAz6ol88v9R6Wk1-j0trRtMJALqMJeYdr4",
  // authDomain: "diet-diary-e1d0f.firebaseapp.com",
  // projectId: "diet-diary-e1d0f",
  // storageBucket: "diet-diary-e1d0f.appspot.com",
  // messagingSenderId: "711868820347",
  // appId: "1:711868820347:web:77378d63c439d31d492bde",
  // measurementId: "G-9TZCDCFQ21"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

