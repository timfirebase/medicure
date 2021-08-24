import * as actionTypes from '../actions/AuthActions';

const initialState = {
    email:'',
    password:''
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return {

            }
        default:
            return state;
    }
}
export default AuthReducer;