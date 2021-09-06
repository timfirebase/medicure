import * as actionTypes from '../actions/AuthActions';

const initialState = {
    isRegistered: false,
    isNotRegistered: false,
    user: null,
    id: '',
    isUserRemoved: false,
    isUserUpdated: false,
    error: ''
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true,
                id: action.id
            }
        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                isNotRegistered: true,
                error : action.error
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user
            }
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
        case actionTypes.CLEAR_IS_NOT_REGISTERED_STATUS:
            return {
                ...state,
                isNotRegistered: false,
                error: ''
            }
        default:
            return state;
    }
}
export default AuthReducer;