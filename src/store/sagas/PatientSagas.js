import firebase from "../../firebase";
import {call, put} from "redux-saga/effects";
import * as PatientActions from '../actions/PatientActions';

export function* getDoctors() {
    const doctors = yield call(firebase.getUsersByRole,"doctor");
    yield put(PatientActions.getDoctorsSuccess(doctors));
}

export function* viewPatients() {
    const patients = yield call(firebase.getUsersByRole,"patient");
    yield put(PatientActions.getPatientsSuccess(patients));
}

export function* bookAppointment(action) {
    yield call(firebase.addAppointment,action.doctorId,action.appointment,"appointments")
    yield put(PatientActions.bookAppointmentSuccess());
}

export function* getPatientAppointments(action) {
    const appointments = yield call(firebase.getAppointmentsByPatientId,action.patientId);
    yield put(PatientActions.getPatientAppointmentsSuccess(appointments));
}

export function* getAllPatientAppointments() {
    const appointments = yield call(firebase.getAllAppointments);
    yield put(PatientActions.getAllPatientAppointmentsSuccess(appointments));
}