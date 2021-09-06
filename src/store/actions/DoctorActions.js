export const GET_DOC_APPOINTMENTS_INIT = 'GET_DOC_APPOINTMENTS_INIT';
export const GET_DOC_APPOINTMENTS_SUCCESS = 'GET_DOC_APPOINTMENTS_SUCCESS';
export const CREATE_PRESC_FILE_INIT = 'CREATE_PRESC_FILE_INIT';
export const CREATE_PRESC_FILE_SUCCESS = 'CREATE_PRESC_FILE_SUCCESS';
export const GET_DOCTORS_INIT = 'GET_DOCTORS_INIT';
export const GET_DOCTORS_SUCCESS = 'GET_DOCTORS_SUCCESS';
export const UPDATE_DOC_GRID = 'UPDATE_DOC_GRID';
export const REGISTER_DOC_SUCCESS = 'REGISTER_DOC_SUCCESS';
export const CLEAR_DOC_REGISTERED_STATUS = 'CLEAR_DOC_REGISTERED_STATUS';
export const REMOVE_DOC_SUCCESS = 'REMOVE_DOC_SUCCESS';
export const CLEAR_USER_REMOVED_STATUS = 'CLEAR_USER_REMOVED_STATUS';
export const UPDATE_DOC_BALANCE_INIT = 'UPDATE_DOC_BALANCE_INIT';
export const UPDATE_DOC_BALANCE_SUCCESS = 'UPDATE_DOC_BALANCE_SUCCESS';
export const CLEAR_BALANCE_WITHDRAW_STATUS = 'CLEAR_BALANCE_WITHDRAW_STATUS';
export const DOCTOR_CANCEL_APPOINTMENT_INIT = 'DOCTOR_CANCEL_APPOINTMENT_INIT';
export const DOCTOR_CANCEL_APPOINTMENT_SUCCESS = 'DOCTOR_CANCEL_APPOINTMENT_SUCCESS';
export const RESET_DOCTOR_APPOINTMENT_CANCEL_STATUS = 'RESET_DOCTOR_APPOINTMENT_CANCEL_STATUS';
export const RESCHDEULE_APPT_INIT = 'RESCHDEULE_APPT_INIT';
export const RESCHDEULE_APPT_SUCCESS = 'RESCHDEULE_APPT_SUCCESS';
export const RESET_DOCTOR_APPOINTMENT_RESCHEDULE_STATUS = 'RESET_DOCTOR_APPOINTMENT_RESCHEDULE_STATUS';


export const getDocAppointmentsInit = (docId) => {
    return {
        type: GET_DOC_APPOINTMENTS_INIT,
        doctorId: docId
    }
}

export const getDocAppointmentsSuccess = (appointments) => {
    return {
        type: GET_DOC_APPOINTMENTS_SUCCESS,
        docAppointments: appointments
    }
}


export const createPrescFileInit = (prescription,appointmentId) => {
    return {
        type: CREATE_PRESC_FILE_INIT,
        prescription: prescription,
        appointmentId: appointmentId
    }
}

export const createPrescFileSuccess= (prescription,appointmentId) => {
    return {
        type: CREATE_PRESC_FILE_SUCCESS,
        prescription: prescription,
        appointmentId: appointmentId
    }
}


export const getDoctorsInit = () => {
    return {
        type:GET_DOCTORS_INIT
    }
}

export const getDoctorsSuccess = (doctors) => {
    return {
        type:GET_DOCTORS_SUCCESS,
        doctors: doctors
    }
}

export const registerDocSuccess = (doctor) => {
    return {
        type:REGISTER_DOC_SUCCESS,
        doctor: doctor
    }
}

export const clearRegisteredStatus = () => {
    return {
        type:CLEAR_DOC_REGISTERED_STATUS
    }
}

export const removeDoctorSuccess = (id) => {
    return {
        type:REMOVE_DOC_SUCCESS,
        id: id
    }
}

export const clearUserRemovedStatus = () => {
    return {
        type:CLEAR_USER_REMOVED_STATUS
    }
}

export const updateDoctorBalanceInit = (doctor) => {
    return {
        type:UPDATE_DOC_BALANCE_INIT,
        doctor:doctor
    }
}

export const updateDoctorBalanceSuccess = (doctor) => {
    return {
        type:UPDATE_DOC_BALANCE_SUCCESS,
        doctor:doctor
    }
}

export const clearBalanceWithdrawStatus = () => {
    return {
        type:CLEAR_BALANCE_WITHDRAW_STATUS
    }
}

export const cancelDoctorAppointmentInit = (appointmentId,status) => {
    return {
        type:DOCTOR_CANCEL_APPOINTMENT_INIT,
        appointmentId:appointmentId,
        status: status
    }
}

export const cancelDoctorAppointmentSuccess = (appointmentId,status) => {
    return {
        type:DOCTOR_CANCEL_APPOINTMENT_SUCCESS,
        appointmentId:appointmentId,
        status: status
    }
}

export const resetAppointmentCancelStatus = () => {
    return {
        type:RESET_DOCTOR_APPOINTMENT_CANCEL_STATUS
    }
}


export const rescheduleAppointmentInit = (availability,appointmentId) => {
    return {
        type: RESCHDEULE_APPT_INIT,
        availability: availability,
        appointmentId: appointmentId
    }
}

export const rescheduleAppointmentSuccess = (availability,appointmentId) => {
    return {
        type: RESCHDEULE_APPT_SUCCESS,
        availability: availability,
        appointmentId: appointmentId
    }
}

export const resetAppointmentRescheduleStatus = () => {
    return {
        type:RESET_DOCTOR_APPOINTMENT_RESCHEDULE_STATUS
    }
}