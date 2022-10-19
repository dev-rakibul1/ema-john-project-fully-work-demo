// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6-KfmnZ6OqjVDRhQbwB5tbWur9zUrFpU",
  authDomain: "ema-jon-simple-99fc1.firebaseapp.com",
  projectId: "ema-jon-simple-99fc1",
  storageBucket: "ema-jon-simple-99fc1.appspot.com",
  messagingSenderId: "187373705634",
  appId: "1:187373705634:web:1adaa835ed5839ff17fafb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
