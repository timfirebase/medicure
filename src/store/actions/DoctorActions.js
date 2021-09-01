export const GET_DOC_APPOINTMENTS_INIT = 'GET_DOC_APPOINTMENTS_INIT';
export const GET_DOC_APPOINTMENTS_SUCCESS = 'GET_DOC_APPOINTMENTS_SUCCESS';
export const CREATE_PRESC_FILE_INIT = 'CREATE_PRESC_FILE_INIT';
export const CREATE_PRESC_FILE_SUCCESS = 'CREATE_PRESC_FILE_SUCCESS';
export const GET_DOCTORS_INIT = 'GET_DOCTORS_INIT';
export const GET_DOCTORS_SUCCESS = 'GET_DOCTORS_SUCCESS';
export const UPDATE_DOC_GRID = 'UPDATE_DOC_GRID';
export const REGISTER_DOC_INIT = 'REGISTER_DOC_INIT';
export const REGISTER_DOC_SUCCESS = 'REGISTER_DOC_SUCCESS';
export const CLEAR_DOC_REGISTERED_STATUS = 'CLEAR_DOC_REGISTERED_STATUS';
export const REMOVE_DOC_INIT = 'REMOVE_DOC_INIT';
export const REMOVE_DOC_SUCCESS = 'REMOVE_DOC_SUCCESS';
export const CLEAR_USER_REMOVED_STATUS = 'CLEAR_USER_REMOVED_STATUS';

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


export const updateDocGrid = (doctors) => {
    return {
        type:UPDATE_DOC_GRID,
        doctors: doctors
    }
}

export const registerDocInit = (user) => {
    return {
        type:REGISTER_DOC_INIT,
        user: user
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

export const removeDoctorInit = (user) => {
    return {
        type:REMOVE_DOC_INIT,
        user: user
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