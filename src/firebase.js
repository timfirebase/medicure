import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCWqJoZimkJai39UHHeHxo0m_81Y93aI7I",
    authDomain: "tim-s-project-bf4d4.firebaseapp.com",
    databaseURL: "https://tim-s-project-bf4d4-default-rtdb.firebaseio.com",
    projectId: "tim-s-project-bf4d4",
    storageBucket: "tim-s-project-bf4d4.appspot.com",
    messagingSenderId: "898905571315",
    appId: "1:898905571315:web:ab31ae213d1eaad5825c86"
}

class Firebase {

    constructor() {
        app.initializeApp(firebaseConfig);
        this.storage = app.storage();
        this.db = app.firestore();
        this.auth = app.auth();
    }

    // AUTH ACTIONS ------------

    createAccount = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();

    addUser = (id, user) => this.db.collection('users').doc(id).set(user);

    getUser = (id) => this.db.collection('users').doc(id).get();

    getUsersByRole = async (role) => {
        const users = [];
        await this.db.collection('users').where("role","==",role).get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                   users.push(doc.data());
                });
            })
        return users;
    }

}

const firebaseInstance = new Firebase();

export default firebaseInstance;