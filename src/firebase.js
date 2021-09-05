import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
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

    deleteUser = (id, collectionName) => this.db.collection(collectionName).doc(id).delete();

    updateUser = (id,user) => this.db.collection("users").doc(id).update(user);

    addAppointment = (id, appointment, collectionName) => this.db.collection(collectionName).add(appointment);

    updateDoctorBalance = (id,totalBalance) => this.db.collection("users").doc(id).update({'totalBalance': totalBalance});

    updateAppointmentStatus = (id,status) => this.db.collection("appointments").doc(id).update({'status': status});

    updateAppointmentSchedule = (id,availability) => this.db.collection("appointments").doc(id).update({'availability': availability});

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
        let secondaryApp = new Firebase(user.id + Math.random());
        await secondaryApp.auth.signInWithEmailAndPassword(user.email, user.password)
              .then(() => {
                  secondaryApp.auth.currentUser.delete();
                  secondaryApp = null;
              })
    }

    storeImgInDB = async (file) => {
        const storageRef = this.storage.ref('images');
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const filePath = await fileRef.getDownloadURL();
        return filePath;
    }

}

const firebaseInstance = new Firebase();

export default firebaseInstance;