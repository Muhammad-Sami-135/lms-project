import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQkAf1JeChAh-8iDN6pmz8gi1nHIbpuOg",
  authDomain: "lms-react-project.firebaseapp.com",
  projectId: "lms-react-project",
  storageBucket: "lms-react-project.firebasestorage.app",
  messagingSenderId: "110054959126",
  appId: "1:110054959126:web:a47343c5272913c02fad37"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export default auth
export {db}