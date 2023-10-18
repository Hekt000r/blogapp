// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ1tifLnl8-azYNTDarT6Ym0DlX6VEsB8",
  authDomain: "blog-app-hektor.firebaseapp.com",
  projectId: "blog-app-hektor",
  storageBucket: "blog-app-hektor.appspot.com",
  messagingSenderId: "371984657298",
  appId: "1:371984657298:web:99b24c4b6ec2b203a3ef4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();