import * as actionTypes from '../actions/PatientActions';

const initialState = {
    patients: [],
    appointmentBooked: false,
    appointments:[],
    allAppointments:[],
    appointmentCancelled: false
};

const onCancelAppointment = (state,action) => {
    const filteredAppointmentIndx = state.appointments.findIndex(appt => appt.appointmentId === action.appointmentId);
    const filteredAppointment = state.appointments[filteredAppointmentIndx];
    filteredAppointment.status = action.status;
    const updatedAppointments = [...state.appointments];
    updatedAppointments[filteredAppointmentIndx] = filteredAppointment;
    return {
        ...state,
        appointmentCancelled: true,
        appointments: updatedAppointments
    }
}

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
        case actionTypes.PATIENT_CANCEL_APPOINTMENT_SUCCESS:
            return onCancelAppointment(state,action);
        case actionTypes.RESET_PATIENT_APPOINTMENT_CANCEL_STATUS:
            return {
                ...state,
                appointmentCancelled: false
            }
        default:
            return state;
    }
}
export default PatientReducer;