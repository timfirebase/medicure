import * as actionTypes from '../actions/AuthActions';
import {UPDATE_USER_SUCCESS} from "../actions/AuthActions";

const initialState = {
    admins: [],
    gotAdmins: false,
    isRegistered: false,
    user: null,
    id: '',
    isUserRemoved: false,
    isUserUpdated: false
};

const onDeleteAdmin = (state,action) => {
    const filteredAdminIdx = state.admins.findIndex(adm => adm.id === adm.id);
    const updatedAdmins = [...state.admins];
    updatedAdmins.splice(filteredAdminIdx,1);
    return {
        ...state,
        isUserRemoved: true,
        admins: updatedAdmins
    }
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true,
                id: action.id
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.ADMIN_SUCCESS:
            return {
                ...state,
                isRegistered: true
            }
        case actionTypes.GET_ADMIN_SUCCESS:
            return {
                ...state,
                admins: action.admins,
                gotAdmins: true
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                user: null
            }
        case actionTypes.CLEAR_REGISTERED_STATUS:
            return {
                ...state,
                isRegistered: false
            }
        case actionTypes.REMOVE_ADMIN_SUCCESS:
            return onDeleteAdmin(state,action);
        case actionTypes.CLEAR_USER_REMOVED_STATUS:
            return {
                ...state,
                isUserRemoved: false
            }
        case actionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                isUserUpdated: true
            }
        case actionTypes.CLEAR_PROFILE_UPDATE_STATUS:
            return {
                ...state,
                isUserUpdated: false
            }
        default:
            return state;
    }
}
export default AuthReducer;