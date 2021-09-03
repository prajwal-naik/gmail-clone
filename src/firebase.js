// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARiIrdDvwewLTP2SOeM1nn2k1kDSBemmk",
  authDomain: "fir-523a9.firebaseapp.com",
  projectId: "fir-523a9",
  storageBucket: "fir-523a9.appspot.com",
  messagingSenderId: "702718302555",
  appId: "1:702718302555:web:84e10cf305d229d50d227e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = !firebase.apps.length ? 
    firebase.initializeApp(firebaseConfig) 
    : 
    firebase.app();

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };