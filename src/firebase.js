import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASqW1UgpkmostdBz8Vrzw43CvPxs4zmT8",
  authDomain: "linkedin-345aa.firebaseapp.com",
  projectId: "linkedin-345aa",
  storageBucket: "linkedin-345aa.appspot.com",
  messagingSenderId: "627026891806",
  appId: "1:627026891806:web:be179c3c26ed644a5a0a0f"
};

  const firebaseApp = initializeApp(firebaseConfig); // connecting to db
  const db = getFirestore(firebaseApp); // gives access to firestore
  const auth = getAuth(firebaseApp); // gives access to authentication

  export { db, auth }; // avoid reconnecting each time a request is sent