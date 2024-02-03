import { Firestore } from "@firebase/firestore";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCza7lBUhx4kkqT4_rGmkSnzmYS3CnkGzE",
  authDomain: "harbor-db.firebaseapp.com",
  projectId: "harbor-db",
  storageBucket: "harbor-db.appspot.com",
  messagingSenderId: "721146637612",
  appId: "1:721146637612:web:ae0114e7e6837075c69089",
  measurementId: "G-JG2DSRT8N9",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
