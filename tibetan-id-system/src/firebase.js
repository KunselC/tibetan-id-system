import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw__EN9-uXvHbhha5dw03eD6vOzTAIWOQ",
  authDomain: "tibetan-id-system-b2e71.firebaseapp.com",
  projectId: "tibetan-id-system-b2e71",
  storageBucket: "tibetan-id-system-b2e71.firebasestorage.app",
  messagingSenderId: "450873808642",
  appId: "1:450873808642:web:95f11b091465951dcad41b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
