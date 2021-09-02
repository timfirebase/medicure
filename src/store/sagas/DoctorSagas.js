import {call, put} from "redux-saga/effects";
import firebase from "../../firebase";
import * as DoctorActions from "../actions/DoctorActions";
import jsPDF from "jspdf";

export function* getDoctorAppointments(action) {
    const appointments = yield call(firebase.getAppointmentsById,"doctorId",action.doctorId);
    yield put(DoctorActions.getDocAppointmentsSuccess(appointments));
}

export function* createAndStorePrescriptionFile(action) {
    const doc = new jsPDF('l','pt');
    doc.setFont("courier");
    doc.setFontSize(20);
    doc.text("Prescription:",20,30);
    doc.setFontSize(13);
    doc.text(action.prescription,20,60);
    const filePath = yield call(firebase.storeFileInDB,doc.output('blob'),action.appointmentId);
    yield put(DoctorActions.createPrescFileSuccess(filePath,action.appointmentId));
}

export function* getDoctors() {
    const doctors = yield call(firebase.getUsersByRole,"doctor");
    yield put(DoctorActions.getDoctorsSuccess(doctors));
}

export function* registerDoc(action) {
    const ref = yield call(firebase.createAccount,action.user.email,action.user.password);
    action.user.id = ref.user.uid;
    if(action.user.img) {
        const imgPath = yield call(firebase.storeImgInDB, action.user.img);
        action.user.img = imgPath;
    }
    yield call(firebase.addUser, ref.user.uid, action.user, "users");
    yield put(DoctorActions.registerDocSuccess(action.user));
}

export function* removeDoctor(action) {
    yield call(firebase.deleteUser, action.user.id, "users");
    yield call(firebase.deleteAuthUser, action.user);
    yield put(DoctorActions.removeDoctorSuccess(action.user.id));
}