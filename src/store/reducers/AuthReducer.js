import * as actionTypes from '../actions/AuthActions';

const initialState = {
    isRegistered: false,
    user: null
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isRegistered: true
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
        default:
            return state;
    }
}
export default AuthReducer;