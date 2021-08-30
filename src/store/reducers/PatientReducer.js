import * as actionTypes from '../actions/PatientActions';

const initialState = {
    doctors: [],
    patients: [],
    appointmentBooked: false,
    appointments:[],
    allAppointments:[]
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
        case actionTypes.UPDATE_DOC_GRID:
            return {
                ...state,
                doctors: [...state.doctors, action.doc]
            }
        default:
            return state;
    }
}
export default PatientReducer;