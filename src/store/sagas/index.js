import * as AuthActions from '../actions/AuthActions';
import {registerUser, login, logOut, updateUser, removeUser, checkAuthChange} from './AuthSagas';
import {
    bookAppointment, cancelPatientAppointment,
    getAllPatientAppointments,
    getPatientAppointments,
    viewPatients
} from './PatientSagas';
import { takeEvery, all } from "redux-saga/effects";
import * as PatientActions from '../actions/PatientActions';
import * as DoctorActions from '../actions/DoctorActions';
import {
    cancelDoctorAppointment,
    createAndStorePrescriptionFile,
    getDoctorAppointments,
    getDoctors, rescheduleAppointment, updateTotalBalance
} from "./DoctorSagas";
import * as AdminActions from "../actions/AdminActions";
import {getAdmins} from "./AdminSagas";

export function* watchAuth() {
    yield all([
        takeEvery(AuthActions.REGISTER_INIT,registerUser),
        takeEvery(AuthActions.REMOVE_USER_INIT,removeUser),
        takeEvery(AuthActions.LOGIN_INIT,login),
        takeEvery(AuthActions.LOGOUT_INIT,logOut),
        takeEvery(AuthActions.UPDATE_USER_INIT,updateUser),
        takeEvery(AuthActions.CHECK_AUTH_CHANGE,checkAuthChange)
    ]);
}

export function* watchPatients() {
    yield all([
        takeEvery(PatientActions.GET_PATIENTS_INIT,viewPatients),
        takeEvery(PatientActions.BOOK_APPOINTMENT_INIT,bookAppointment),
        takeEvery(PatientActions.GET_PATIENT_APPOINTMENTS_INIT,getPatientAppointments),
        takeEvery(PatientActions.GET_ALL_PATIENT_APPOINTMENTS_INIT,getAllPatientAppointments),
        takeEvery(PatientActions.PATIENT_CANCEL_APPOINTMENT_INIT,cancelPatientAppointment)
    ]);
}

export function* watchDoctors() {
    yield all([
        takeEvery(DoctorActions.GET_DOC_APPOINTMENTS_INIT,getDoctorAppointments),
        takeEvery(DoctorActions.CREATE_PRESC_FILE_INIT,createAndStorePrescriptionFile),
        takeEvery(DoctorActions.GET_DOCTORS_INIT,getDoctors),
        takeEvery(DoctorActions.UPDATE_DOC_BALANCE_INIT,updateTotalBalance),
        takeEvery(DoctorActions.DOCTOR_CANCEL_APPOINTMENT_INIT,cancelDoctorAppointment),
        takeEvery(DoctorActions.RESCHDEULE_APPT_INIT,rescheduleAppointment)
    ]);
}

export function* watchAdmins() {
    yield all([
        takeEvery(AdminActions.GET_ADMIN_INIT,getAdmins),
    ]);
}