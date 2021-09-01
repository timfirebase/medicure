import * as AuthActions from '../actions/AuthActions';
import {registerUser, login, addAdmin, logOut} from './AuthSagas';
import {
    bookAppointment,
    getAllPatientAppointments,
    getPatientAppointments,
    viewPatients
} from './PatientSagas';
import { takeEvery, all } from "redux-saga/effects";
import * as PatientActions from '../actions/PatientActions';
import * as DoctorActions from '../actions/DoctorActions';
import {
    createAndStorePrescriptionFile,
    getDoctorAppointments,
    getDoctors,
    registerDoc,
    removeDoctor
} from "./DoctorSagas";

export function* watchAuth() {
    yield all([
        takeEvery(AuthActions.REGISTER_INIT,registerUser),
        takeEvery(AuthActions.LOGIN_INIT,login),
        takeEvery(AuthActions.ADMIN_INIT,addAdmin),
        takeEvery(AuthActions.LOGOUT_INIT,logOut),
    ]);
}

export function* watchPatients() {
    yield all([
        takeEvery(PatientActions.GET_PATIENTS_INIT,viewPatients),
        takeEvery(PatientActions.BOOK_APPOINTMENT_INIT,bookAppointment),
        takeEvery(PatientActions.GET_PATIENT_APPOINTMENTS_INIT,getPatientAppointments),
        takeEvery(PatientActions.GET_ALL_PATIENT_APPOINTMENTS_INIT,getAllPatientAppointments)
    ]);
}

export function* watchDoctors() {
    yield all([
        takeEvery(DoctorActions.GET_DOC_APPOINTMENTS_INIT,getDoctorAppointments),
        takeEvery(DoctorActions.CREATE_PRESC_FILE_INIT,createAndStorePrescriptionFile),
        takeEvery(DoctorActions.GET_DOCTORS_INIT,getDoctors),
        takeEvery(DoctorActions.REGISTER_DOC_INIT,registerDoc),
        takeEvery(DoctorActions.REMOVE_DOC_INIT,removeDoctor),
    ]);
}