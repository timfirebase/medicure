import * as DoctorActions from "../actions/DoctorActions";

const initialState = {
    doctorAppointments: [],
    fileSaved: [],
    doctors: [],
    gotDoctors: false,
    isRegistered: false,
    isUserRemoved: false
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
        default:
            return state;
    }
}

export default DoctorReducer;