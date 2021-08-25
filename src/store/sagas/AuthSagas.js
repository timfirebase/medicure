import firebase from '../../firebase';
import { call, put } from 'redux-saga/effects';
import * as AuthActions from '../actions/AuthActions';

export function* registerUser(action) {
    debugger;
    const ref = yield call(firebase.createAccount,action.user.email,action.user.password);
    yield call(firebase.addUser, ref.user.uid, action.user);
    yield put(AuthActions.registerSuccess());
}








export function* login(action) {
    debugger;
    const ref = yield call(firebase.signIn,action.user.email,action.user.password);
    const user = yield call(firebase.getUser, ref.user.uid);
    console.log(user);
    yield put(AuthActions.loginSuccess(user));
}