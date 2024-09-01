// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhxYV_9jivFnkk3T5q_8Y-TjMYIof59z0",
  authDomain: "streamgpt-5010f.firebaseapp.com",
  projectId: "streamgpt-5010f",
  storageBucket: "streamgpt-5010f.appspot.com",
  messagingSenderId: "990022716427",
  appId: "1:990022716427:web:496016b3b153fe08e90b0e",
  measurementId: "G-VW70NQXGVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();