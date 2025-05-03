// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIaUIv-pT7zR_7-fqJFL82FscMb3kTnT0",
  authDomain: "dragon-news-with-authen.firebaseapp.com",
  projectId: "dragon-news-with-authen",
  storageBucket: "dragon-news-with-authen.firebasestorage.app",
  messagingSenderId: "100557456264",
  appId: "1:100557456264:web:638b674bbc9839fefc703d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)