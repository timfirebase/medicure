import firebase from '../../firebase';
import { call, put } from 'redux-saga/effects';
import * as AuthActions from '../actions/AuthActions';

export function* registerUser(action) {
    const ref = yield call(firebase.createAccount,action.user.email,action.user.password);
    action.user.id = ref.user.uid;
    if(action.user.img) {
        const imgPath = yield call(firebase.storeImgInDB, action.user.img);
        action.user.img = imgPath;
    }
    yield call(firebase.addUser, ref.user.uid, action.user, "users");
    yield put(AuthActions.registerSuccess(ref.user.uid));
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

export function* getAdmins() {
    const admins = yield call(firebase.getUsersByRole,"admin");
    yield put(AuthActions.getAdminSuccess(admins));
}

export function* removeAdmin(action) {
    yield call(firebase.deleteUser, action.user.id, "users");
    yield call(firebase.deleteAuthUser, action.user);
    yield put(AuthActions.removeAdminSuccess(action.user.id));
}

export function* logOut() {
    yield call(firebase.signOut);
    yield put(AuthActions.logoutSuccess());
}

export function* updateUser(action) {
    if(action.user.imgChanged) {
        const imgPath = yield call(firebase.storeImgInDB, action.user.img);
        action.user.img = imgPath;
    }
    if(action.user.recreateUser) {
        yield call(firebase.deleteUser, action.user.id, "users");
        yield call(firebase.deleteAuthUser, action.currentUser);
        const ref = yield call(firebase.createAccount,action.user.email,action.user.password);
        action.user.id = ref.user.uid;
        yield call(firebase.addUser, ref.user.uid, action.user, "users");
    } else {
        yield call(firebase.updateUser,action.user.id,action.user);
    }
    yield put(AuthActions.updateUserSuccess(action.user));
}