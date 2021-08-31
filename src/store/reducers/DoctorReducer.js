import * as DoctorActions from "../actions/DoctorActions";

const initialState = {
    doctorAppointments: [],
    fileSaved: []
}

const updatePrescPath = (state,action) => {
    debugger;
    const filteredAppointmentIdx = state.doctorAppointments.findIndex(appt => appt.appointmentId === action.appointmentId);
    const filteredAppointment = state.doctorAppointments[filteredAppointmentIdx];
    filteredAppointment.prescription = action.prescription;
    const updatedAppointments = state.doctorAppointments;
    updatedAppointments[filteredAppointmentIdx] = filteredAppointment;
    return {
        ...state,
        fileSaved: [1],
        doctorAppointments: updatedAppointments
    }
}

const DoctorReducer = (state = initialState, action) => {
    switch (action.type) {
        case DoctorActions.GET_DOC_APPOINTMENTS_SUCCESS:
            return{
                ...state,
                doctorAppointments: action.docAppointments
            }
        case DoctorActions.CREATE_PRESC_FILE_SUCCESS:
            return updatePrescPath(state,action);
        default:
            return state;
    }
}

export default DoctorReducer;