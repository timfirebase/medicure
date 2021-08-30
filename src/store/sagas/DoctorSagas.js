import {call, put} from "redux-saga/effects";
import firebase from "../../firebase";
import * as DoctorActions from "../actions/DoctorActions";
import jsPDF from "jspdf";

export function* getDoctorAppointments(action) {
    const appointments = yield call(firebase.getAppointmentsById,"doctorId",action.doctorId);
    yield put(DoctorActions.getDocAppointmentsSuccess(appointments));
}

export function* createAndStorePrescriptionFile(action) {
    const doc = new jsPDF('p','pt');
    doc.setFont("courier");
    doc.setFontSize(10);
    doc.text(action.prescription,20,30);
    const appointments = yield call(firebase.getAppointmentsById,"doctorId",action.doctorId);
    yield put(DoctorActions.getDocAppointmentsSuccess(appointments));
}