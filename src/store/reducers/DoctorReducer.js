import * as DoctorActions from "../actions/DoctorActions";

const initialState = {
    doctorAppointments: []
}

const DoctorReducer = (state = initialState, action) => {
    switch (action.type) {
        case DoctorActions.GET_DOC_APPOINTMENTS_SUCCESS:
            return{
                ...state,
                doctorAppointments: action.docAppointments
            }
        default:
            return state;
    }
}

export default DoctorReducer;