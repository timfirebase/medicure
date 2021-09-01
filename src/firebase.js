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

    constructor(name) {
        app.initializeApp(firebaseConfig,name);
        this.storage = app.storage();
        this.db = app.firestore();
        this.auth = app.auth();
    }

    createAccount = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();

    addUser = (id, user, collectionName) => this.db.collection(collectionName).doc(id).set(user);

    deleteUser = (id,collectionName) => this.db.collection(collectionName).doc(id).delete();

    addAppointment = (id, appointment, collectionName) => this.db.collection(collectionName).add(appointment);

    getUser = (id,collectionName) => this.db.collection(collectionName).doc(id).get();

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

    getAppointmentsById = async (fieldToMatch, id) => {
        const appointments = [];
        await this.db.collection('appointments').where(fieldToMatch,"==",id).get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    const appointment = {...doc.data(),appointmentId: doc.id}
                    appointments.push(appointment);
                });
            })
        return appointments;
    }

    getAllAppointments = async () => {
        const allAppointments = [];
        await this.db.collection('appointments').get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                        allAppointments.push(doc.data());
                },
                );
            })
        return allAppointments;
    }


    storeFileInDB = async (file,appointmentId) => {
        const storageRef = this.storage.ref();
        const fileRef = storageRef.child(appointmentId);
        await fileRef.put(file,{contentType: 'application/pdf'});
        const filePath = await fileRef.getDownloadURL();
        await this.db.collection("appointments").doc(appointmentId).update("prescription", filePath);
        return filePath;
    }

    deleteAuthUser = async (user) => {
        const secondaryApp = new Firebase('secondary');
        await secondaryApp.auth.signInWithEmailAndPassword(user.email, user.password)
              .then(() => {
                secondaryApp.auth.currentUser.delete();
                secondaryApp.auth.signOut();
                // Then you can delete the user from db
              })
    }
}

const firebaseInstance = new Firebase();

export default firebaseInstance;