import firebase from 'firebase';
import { initializeApp } from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBbTiiMEUrZtp7b1QG4J5OR7yqB_BM4Lpo",
    authDomain: "linkedin-clone-jcw.firebaseapp.com",
    projectId: "linkedin-clone-jcw",
    storageBucket: "linkedin-clone-jcw.appspot.com",
    messagingSenderId: "452277241716",
    appId: "1:452277241716:web:8df8d8bbb6d2d0b2f1ce21"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };