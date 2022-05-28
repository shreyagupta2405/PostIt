// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvqhRgTHrm9eiOJa8Sx5iPm1uF6oHsOfI",
  authDomain: "uplaodingfile.firebaseapp.com",
  projectId: "uplaodingfile",
  storageBucket: "uplaodingfile.appspot.com",
  messagingSenderId: "880568588336",
  appId: "1:880568588336:web:d129aceecf2c1a1151f5f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);