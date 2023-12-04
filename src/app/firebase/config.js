import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhOZswGbYTJtaXfh3FkTMGeJNxdTSK5Vc",
  authDomain: "regal-12612.firebaseapp.com",
  projectId: "regal-12612",
  storageBucket: "regal-12612.appspot.com",
  messagingSenderId: "883317381062",
  appId: "1:883317381062:web:ed298a525d1769f06884c7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);