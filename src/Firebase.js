// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCza7lBUhx4kkqT4_rGmkSnzmYS3CnkGzE",
    authDomain: "harbor-db.firebaseapp.com",
    projectId: "harbor-db",
    storageBucket: "harbor-db.appspot.com",
    messagingSenderId: "721146637612",
    appId: "1:721146637612:web:ae0114e7e6837075c69089",
    measurementId: "G-JG2DSRT8N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);