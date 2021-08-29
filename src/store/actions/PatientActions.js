
export const GET_DOCTORS_INIT = 'GET_DOCTORS_INIT';
export const GET_DOCTORS_SUCCESS = 'GET_DOCTORS_SUCCESS';
export const BOOK_APPOINTMENT_INIT = 'BOOK_APPOINTMENT_INIT';
export const BOOK_APPOINTMENT_SUCCESS = 'BOOK_APPOINTMENT_SUCCESS';
export const GET_PATIENTS_INIT = 'GET_PATIENTS_INIT';
export const GET_PATIENTS_SUCCESS = 'GET_PATIENTS_SUCCESS';
export const GET_PATIENT_APPOINTMENTS_INIT = 'GET_PATIENT_APPOINTMENTS_INIT';
export const GET_PATIENT_APPOINTMENTS_SUCCESS = 'GET_PATIENT_APPOINTMENTS_SUCCESS';

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

export const bookAppointmentInit = (doctor,appointment) => {
    return {
        type:BOOK_APPOINTMENT_INIT,
        doctor: doctor,
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