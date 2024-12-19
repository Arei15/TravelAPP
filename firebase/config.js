
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAufmz9cbV1Mb-pvClPeJCeg219pYcgyk4",
  authDomain: "bali-compass-be95d.firebaseapp.com",
  projectId: "bali-compass-be95d",
  storageBucket: "bali-compass-be95d.firebasestorage.app",
  messagingSenderId: "222173805931",
  appId: "1:222173805931:web:f2caf4e6c6592a3b9ba02e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };