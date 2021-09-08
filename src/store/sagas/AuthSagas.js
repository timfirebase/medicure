import firebase from '../../firebase';
import { call, put } from 'redux-saga/effects';
import * as AuthActions from '../actions/AuthActions';
import * as DoctorActions from "../actions/DoctorActions";
import * as AdminActions from "../actions/AdminActions";

export function* registerUser(action) {
    try {
        const ref = yield call(firebase.createAccount, action.user.email, action.user.password);
        action.user.id = ref.user.uid;
        if (action.user.img) {
            const imgPath = yield call(firebase.storeImgInDB, action.user.img);
            action.user.img = imgPath;
        }
        yield call(firebase.addUser, ref.user.uid, action.user, "users");
        yield put(AuthActions.registerSuccess(ref.user.uid));
        if("admin" ===  action.mode) {
            yield put(AdminActions.registerAdminSuccess(action.user));
        } else if ("doctor" ===  action.mode) {
            yield put(DoctorActions.registerDocSuccess(action.user));
        }
    }
    catch (error) {
        yield put(AuthActions.registerFail(error));
    }
}

export function* login(action) {
    try {
        const ref = yield call(firebase.signIn, action.user.email, action.user.password);
        const snapshot = yield call(firebase.getUser, ref.user.uid, "users");
        if (snapshot.data()) { // if user exists in database
            const user = snapshot.data();
            localStorage.setItem('user',JSON.stringify(user));
            yield put(AuthActions.loginSuccess(user));
        }
    } catch(error) {
        yield put(AuthActions.loginFail(error));
    }
}

export function* removeUser(action) {
    try{
        yield call(firebase.deleteUser, action.user.id, "users");
        yield call(firebase.deleteAuthUser, action.user);
        if("admin" ===  action.mode) {
            yield put(AdminActions.removeAdminSuccess(action.user.id));
        } else if ("doctor" ===  action.mode) {
            yield put(DoctorActions.removeDoctorSuccess(action.user));
        }
    } catch (error) {

    }
}

export function* logOut() {
    yield call(firebase.signOut);
    localStorage.removeItem('user');
    yield put(AuthActions.logoutSuccess());
}

export function* checkAuthChange() {
    const user = localStorage.getItem('user');
    if(user) {
        yield put(AuthActions.loginSuccess(JSON.parse(user)));
    }
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