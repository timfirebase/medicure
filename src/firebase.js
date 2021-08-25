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
});

export const auth = app.auth();
export const db = app.firestore();

export const createAccount = async (user) => {
    debugger;
    const resp = await auth.createUserWithEmailAndPassword(user.email, user.password);
    const userId = resp.user.uid;
    console.log(userId);
    const userAdded = await db.collection('users').doc(userId).set(user);
    console.log(userAdded);
}


export const signIn = async (email, password) => await auth.signInWithEmailAndPassword(email, password);

export const addUser = async (id, user) => await db.collection('users').doc(id).set(user);

export const getUser = async (id) => await db.collection('users').doc(id).get();

export default app;