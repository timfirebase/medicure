import * as actionTypes from '../actions/PatientActions';

const initialState = {
    doctors: [],
    patients: []
};

const PatientReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DOCTORS_SUCCESS:
            return {
                ...state,
                doctors: action.doctors,
            };
        case actionTypes.GET_PATIENTS_SUCCESS:
            return {
                ...state,
                patients: action.patients
            }

        default:
            return state;
    }
}
export default PatientReducer;