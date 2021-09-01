import firebase from '../../firebase';
import { call, put } from 'redux-saga/effects';
import * as AuthActions from '../actions/AuthActions';

export function* registerUser(action) {
    const ref = yield call(firebase.createAccount,action.user.email,action.user.password);
    action.user.id = ref.user.uid;
    yield call(firebase.addUser, ref.user.uid, action.user, "users");
    yield put(AuthActions.registerSuccess());
}

export function* removeDoctor(action) {
    yield call(firebase.deleteUser, action.id, "user");
    yield call(firebase.deleteAuthUser, action.user);
    yield put(AuthActions.removeSuccess());
}

export function* login(action) {
    const ref = yield call(firebase.signIn,action.user.email,action.user.password);
    const snapshot = yield call(firebase.getUser, ref.user.uid, "users");
    if (snapshot.data()) { // if user exists in database
        const user = snapshot.data();
        yield put(AuthActions.loginSuccess(user));
    }
}

export function* addAdmin(action) {
    const ref = yield call(firebase.createAccount, action.user.email, action.user.password);
    action.user.id = ref.user.uid;
    yield call(firebase.addUser, ref.user.uid, action.user, "users");
    yield put(AuthActions.adminSuccess());
}

export function* logOut() {
    yield call(firebase.signOut);
    yield put(AuthActions.logoutSuccess());
}