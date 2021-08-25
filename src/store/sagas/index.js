import * as AuthActions from '../actions/AuthActions';
import {registerUser,login} from './AuthSagas';
import { takeEvery, all, takeLatest } from "redux-saga/effects";

export function* watchAuth() {
    yield all([
        takeEvery(AuthActions.REGISTER_INIT,registerUser),
        takeEvery(AuthActions.LOGIN_INIT,login)
    ]);
}