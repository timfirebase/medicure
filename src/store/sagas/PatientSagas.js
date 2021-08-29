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