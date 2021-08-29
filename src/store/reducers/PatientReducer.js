import * as actionTypes from '../actions/PatientActions';

const initialState = {
    doctors: []
};

const PatientReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DOCTORS_SUCCESS:
            return {
                ...state,
                doctors: action.doctors.concat()
            }
        default:
            return state;
    }
}
export default PatientReducer;