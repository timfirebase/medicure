import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCWqJoZimkJai39UHHeHxo0m_81Y93aI7I",
    authDomain: "tim-s-project-bf4d4.firebaseapp.com",
    databaseURL: "https://tim-s-project-bf4d4-default-rtdb.firebaseio.com",
    projectId: "tim-s-project-bf4d4",
    storageBucket: "tim-s-project-bf4d4.appspot.com",
    messagingSenderId: "898905571315",
    appId: "1:898905571315:web:ab31ae213d1eaad5825c86"
})

export const auth = app.auth();
export const db = app.firestore();
export default app;