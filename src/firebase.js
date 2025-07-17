// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDisFaPp_Cx-WgZMECFiEPtNy77zvb4JfY",
  authDomain: "ai-agency-2c55a.firebaseapp.com",
  projectId: "ai-agency-2c55a",
  storageBucket: "ai-agency-2c55a.appspot.com",
  messagingSenderId: "1043571101014",
  appId: "1:1043571101014:web:ff8a28e9ddc439d0fb9af7",
  measurementId: "G-B57CJMWSLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 