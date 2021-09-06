import * as DoctorActions from "../actions/DoctorActions";

const initialState = {
    doctorAppointments: [],
    fileSaved: [],
    doctors: [],
    gotDoctors: false,
    isRegistered: false,
    isUserRemoved: false,
    isWithdrawSuccess: false,
    appointmentCancelled: false,
    isRescheduled: false
}

const onDeleteDoctor = (state,action) => {
    const filteredDoctorIdx = state.doctors.findIndex(doc => doc.id === action.id);
    const updatedDocs = [...state.doctors];
    updatedDocs.splice(filteredDoctorIdx,1);
    return {
        ...state,
        isUserRemoved: true,
        doctors: updatedDocs
    }
}

const updatePrescPath = (state,action) => {
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

const updateAppointmentAvailability = (state,action) => {
    const filteredAppointmentIdx = state.doctorAppointments.findIndex(appt => appt.appointmentId === action.appointmentId);
    const filteredAppointment = state.doctorAppointments[filteredAppointmentIdx];
    filteredAppointment.availability = action.availability;
    const updatedAppointments = [...state.doctorAppointments];
    updatedAppointments[filteredAppointmentIdx] = filteredAppointment;
    return {
        ...state,
        isRescheduled: true,
        doctorAppointments: updatedAppointments
    }
}

const onCancelDoctorAppointment = (state,action) => {
    const filteredAppointmentIndx = state.doctorAppointments.findIndex(appt => appt.appointmentId === action.appointmentId);
    const filteredAppointment = state.doctorAppointments[filteredAppointmentIndx];
    filteredAppointment.status = action.status;
    const updatedAppointments = [...state.doctorAppointments];
    updatedAppointments[filteredAppointmentIndx] = filteredAppointment;
    return {
        ...state,
        appointmentCancelled: true,
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
        case DoctorActions.GET_DOCTORS_SUCCESS:
            return {
                ...state,
                doctors: action.doctors,
                gotDoctors: true
            };
        case DoctorActions.UPDATE_DOC_GRID:
            return {
                ...state,
                doctors: action.doctors
            }
        case DoctorActions.REGISTER_DOC_SUCCESS:
            return {
                ...state,
                isRegistered: true,
                doctors: [...state.doctors, action.doctor]
            }
        case DoctorActions.CLEAR_DOC_REGISTERED_STATUS:
            return {
                ...state,
                isRegistered: false
            }
        case DoctorActions.REMOVE_DOC_SUCCESS:
            return onDeleteDoctor(state,action);
        case DoctorActions.CLEAR_USER_REMOVED_STATUS:
            return {
                ...state,
                isUserRemoved: false
            }
        case DoctorActions.UPDATE_DOC_BALANCE_SUCCESS:
            return {
                ...state,
                isWithdrawSuccess: true
            }
        case DoctorActions.CLEAR_BALANCE_WITHDRAW_STATUS:
            return {
                ...state,
                isWithdrawSuccess: false
            }
        case DoctorActions.DOCTOR_CANCEL_APPOINTMENT_SUCCESS:
            return onCancelDoctorAppointment(state,action);
        case DoctorActions.RESET_DOCTOR_APPOINTMENT_CANCEL_STATUS:
            return {
                ...state,
                appointmentCancelled: false
            }
        case DoctorActions.RESCHDEULE_APPT_SUCCESS:
            return updateAppointmentAvailability(state,action);
        case DoctorActions.RESET_DOCTOR_APPOINTMENT_RESCHEDULE_STATUS:
            return {
                ...state,
                isRescheduled: false
            }
        default:
            return state;
    }
}

export default DoctorReducer;