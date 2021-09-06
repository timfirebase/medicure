import {call, put} from "redux-saga/effects";
import firebase from "../../firebase";
import * as DoctorActions from "../actions/DoctorActions";
import * as AuthActions from "../actions/AuthActions";
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

export function* removeDoctor(action) {
    yield call(firebase.deleteUser, action.user.id, "users");
    yield call(firebase.deleteAuthUser, action.user);
    yield put(DoctorActions.removeDoctorSuccess(action.user.id));
}

export function* updateTotalBalance(action) {
    yield call(firebase.updateDoctorBalance,action.doctor.id,action.doctor.totalBalance);
    yield put(DoctorActions.updateDoctorBalanceSuccess(action.doctor));
    yield put(AuthActions.updateUserSuccess(action.doctor));
}

export function* cancelDoctorAppointment(action) {
    yield call(firebase.updateAppointmentStatus,action.appointmentId,action.status);
    yield put(DoctorActions.cancelDoctorAppointmentSuccess(action.appointmentId,action.status));
}

export function* rescheduleAppointment(action) {
    yield call(firebase.updateAppointmentSchedule,action.appointmentId,action.availability);
    yield put(DoctorActions.rescheduleAppointmentSuccess(action.availability,action.appointmentId));
}