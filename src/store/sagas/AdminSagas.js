import {call, put} from "redux-saga/effects";
import firebase from "../../firebase";
import * as AdminActions from "../actions/AdminActions";


export function* getAdmins() {
    const admins = yield call(firebase.getUsersByRole,"admin");
    yield put(AdminActions.getAdminSuccess(admins));
}