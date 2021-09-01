import * as actionTypes from '../actions/PatientActions';

const initialState = {
    patients: [],
    appointmentBooked: false,
    appointments:[],
    allAppointments:[]
};

const PatientReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PATIENTS_SUCCESS:
            return {
                ...state,
                patients: action.patients
            }
        case actionTypes.BOOK_APPOINTMENT_SUCCESS:
            return {
                ...state,
                appointmentBooked: true
            }
        case actionTypes.GET_PATIENT_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                appointments: action.appointments
            }
        case actionTypes.GET_ALL_PATIENT_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                allAppointments: action.allAppointments
            }
        case actionTypes.RESET_APPOINTMENT_BOOK_STATUS:
            return {
                ...state,
                appointmentBooked: false
            }
        default:
            return state;
    }
}
export default PatientReducer;