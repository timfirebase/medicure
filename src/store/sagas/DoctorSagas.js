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