import firebase from '../../firebase';
import { call, put } from 'redux-saga/effects';
import * as AuthActions from '../actions/AuthActions';

export function* registerUser(action) {
    const ref = yield call(firebase.createAccount,action.user.email,action.user.password);
    yield call(firebase.addUser, ref.user.uid, action.user);
    yield put(AuthActions.registerSuccess());
}

export function* login(action) {
    const ref = yield call(firebase.signIn,action.user.email,action.user.password);
    const snapshot = yield call(firebase.getUser, ref.user.uid);
    if (snapshot.data()) { // if user exists in database
        const user = snapshot.data();
        yield put(AuthActions.loginSuccess(user));
    }
}