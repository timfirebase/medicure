import firebase from "../../firebase";
import {call, put} from "redux-saga/effects";
import * as PatientActions from '../actions/PatientActions';

export function* viewPatients() {
    const patients = yield call(firebase.getUsersByRole,"patient");
    yield put(PatientActions.getPatientsSuccess(patients));
}

export function* bookAppointment(action) {
    yield call(firebase.addAppointment,action.appointment.doctorId,action.appointment,"appointments");
    yield call(firebase.updateDoctorBalance,action.appointment.doctorId,action.appointment.doctorTotalBalance);
    yield put(PatientActions.bookAppointmentSuccess());
}

export function* getPatientAppointments(action) {
    const appointments = yield call(firebase.getAppointmentsById,"patientId",action.patientId);
    yield put(PatientActions.getPatientAppointmentsSuccess(appointments));
}

export function* getAllPatientAppointments() {
    const appointments = yield call(firebase.getAllAppointments);
    yield put(PatientActions.getAllPatientAppointmentsSuccess(appointments));
}


export function* cancelPatientAppointment(action) {
    yield call(firebase.updateAppointmentStatus,action.appointmentId,action.status);
    yield put(PatientActions.cancelPatientAppointmentSuccess(action.appointmentId,action.status));
}