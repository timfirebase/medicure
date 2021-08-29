import * as AuthActions from '../actions/AuthActions';
import {registerUser, login, addAdmin, logOut} from './AuthSagas';
import {bookAppointment, getDoctors, getPatientAppointments, viewPatients} from './PatientSagas';
import { takeEvery, all } from "redux-saga/effects";
import * as PatientActions from '../actions/PatientActions';

export function* watchAuth() {
    yield all([
        takeEvery(AuthActions.REGISTER_INIT,registerUser),
        takeEvery(AuthActions.LOGIN_INIT,login),
        takeEvery(AuthActions.ADMIN_INIT,addAdmin),
        takeEvery(AuthActions.LOGOUT_INIT,logOut)
    ]);
}

export function* watchPatients() {
    yield all([
        takeEvery(PatientActions.GET_DOCTORS_INIT,getDoctors),
        takeEvery(PatientActions.GET_PATIENTS_INIT,viewPatients),
        takeEvery(PatientActions.BOOK_APPOINTMENT_INIT,bookAppointment),
        takeEvery(PatientActions.GET_PATIENT_APPOINTMENTS_INIT,getPatientAppointments)
    ]);
}

