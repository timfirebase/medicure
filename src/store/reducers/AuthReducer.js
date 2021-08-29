import * as actionTypes from '../actions/AuthActions';

const initialState = {
    isRegistered: false,
    email:'',
    password:'',
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
        default:
            return state;
    }
}
export default AuthReducer;