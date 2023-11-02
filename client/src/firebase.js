// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-state-6cf4a.firebaseapp.com",
  projectId: "real-state-6cf4a",
  storageBucket: "real-state-6cf4a.appspot.com",
  messagingSenderId: "328469781986",
  appId: "1:328469781986:web:9d0ab6101f123d101dedbb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
