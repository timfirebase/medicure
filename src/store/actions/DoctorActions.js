export const GET_DOC_APPOINTMENTS_INIT = 'GET_DOC_APPOINTMENTS_INIT';
export const GET_DOC_APPOINTMENTS_SUCCESS = 'GET_DOC_APPOINTMENTS_SUCCESS';
export const CREATE_PRESC_FILE_INIT = 'CREATE_PRESC_FILE_INIT';
export const CREATE_PRESC_FILE_SUCCESS = 'CREATE_PRESC_FILE_SUCCESS';


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