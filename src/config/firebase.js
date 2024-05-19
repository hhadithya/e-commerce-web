import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8BPvqY0EdurQBfx_BySSxKIYV_Q1vebU",
  authDomain: "e-commerce-web-5fus.firebaseapp.com",
  projectId: "e-commerce-web-5fus",
  storageBucket: "e-commerce-web-5fus.appspot.com",
  messagingSenderId: "953680942798",
  appId: "1:953680942798:web:969782825fb4cc35c4e29f"
};

// console.log(process.env.REACT_APP_API_KEY);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);