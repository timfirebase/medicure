export const BOOK_APPOINTMENT_INIT = 'BOOK_APPOINTMENT_INIT';
export const BOOK_APPOINTMENT_SUCCESS = 'BOOK_APPOINTMENT_SUCCESS';
export const GET_PATIENTS_INIT = 'GET_PATIENTS_INIT';
export const GET_PATIENTS_SUCCESS = 'GET_PATIENTS_SUCCESS';
export const GET_PATIENT_APPOINTMENTS_INIT = 'GET_PATIENT_APPOINTMENTS_INIT';
export const GET_PATIENT_APPOINTMENTS_SUCCESS = 'GET_PATIENT_APPOINTMENTS_SUCCESS'
export const RESET_APPOINTMENT_BOOK_STATUS = 'RESET_APPOINTMENT_BOOK_STATUS';
export const GET_ALL_PATIENT_APPOINTMENTS_INIT = 'GET_ALL_PATIENT_APPOINTMENTS_INIT';
export const GET_ALL_PATIENT_APPOINTMENTS_SUCCESS = 'GET_ALL_PATIENT_APPOINTMENTS_SUCCESS';
export const PATIENT_CANCEL_APPOINTMENT_INIT = 'PATIENT_CANCEL_APPOINTMENT_INIT';
export const PATIENT_CANCEL_APPOINTMENT_SUCCESS = 'PATIENT_CANCEL_APPOINTMENT_SUCCESS';
export const RESET_PATIENT_APPOINTMENT_CANCEL_STATUS = 'RESET_PATIENT_APPOINTMENT_CANCEL_STATUS';


export const bookAppointmentInit = (appointment) => {
    return {
        type:BOOK_APPOINTMENT_INIT,
        appointment: appointment
    }
}

export const bookAppointmentSuccess = () => {
    return {
        type:BOOK_APPOINTMENT_SUCCESS
    }
}

export const getPatientsInit = () => {
    return {
        type:GET_PATIENTS_INIT
    }
}

export const getPatientsSuccess = (patients) => {
    return {
        type:GET_PATIENTS_SUCCESS,
        patients: patients
    }
}

export const getPatientAppointmentsInit = (patientId) => {
    return {
        type:GET_PATIENT_APPOINTMENTS_INIT,
        patientId: patientId
    }
}

export const getPatientAppointmentsSuccess = (appointments) => {
    return {
        type:GET_PATIENT_APPOINTMENTS_SUCCESS,
        appointments: appointments
    }
}

export const getAllPatientAppointmentsInit = () => {
    return {
        type:GET_ALL_PATIENT_APPOINTMENTS_INIT
    }
}

export const getAllPatientAppointmentsSuccess = (appointments) => {
    return {
        type:GET_ALL_PATIENT_APPOINTMENTS_SUCCESS,
        allAppointments: appointments
    }
}

export const resetAppointmentBookStatus = () => {
    return {
        type:RESET_APPOINTMENT_BOOK_STATUS
    }
}

export const cancelPatientAppointmentInit = (appointmentId,status) => {
    return {
        type:PATIENT_CANCEL_APPOINTMENT_INIT,
        appointmentId:appointmentId,
        status: status
    }
}

export const cancelPatientAppointmentSuccess = (appointmentId,status) => {
    return {
        type:PATIENT_CANCEL_APPOINTMENT_SUCCESS,
        appointmentId:appointmentId,
        status: status
    }
}

export const resetAppointmentCancelStatus = () => {
    return {
        type:RESET_PATIENT_APPOINTMENT_CANCEL_STATUS
    }
}