import * as AuthActions from '../actions/AuthActions';
import {registerUser,login} from './AuthSagas';
import {getDoctors} from './PatientSagas';
import { takeEvery, all } from "redux-saga/effects";
import * as PatientActions from '../actions/PatientActions';

export function* watchAuth() {
    yield all([
        takeEvery(AuthActions.REGISTER_INIT,registerUser),
        takeEvery(AuthActions.LOGIN_INIT,login)
    ]);
}

export function* watchPatients() {
    yield all([
        takeEvery(PatientActions.GET_DOCTORS_INIT,getDoctors)
    ]);
}