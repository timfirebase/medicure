
export const GET_DOCTORS_INIT = 'GET_DOCTORS_INIT';
export const GET_DOCTORS_SUCCESS = 'GET_DOCTORS_SUCCESS';
export const BOOK_APPOINTMENT_INIT = 'BOOK_APPOINTMENT_INIT';
export const BOOK_APPOINTMENT_SUCCESS = 'BOOK_APPOINTMENT_SUCCESS';

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

export const bookAppointmentInit = (user) => {
    return {
        type:BOOK_APPOINTMENT_INIT,
        user: user
    }
}

export const bookAppointmentSuccess = () => {
    return {
        type:BOOK_APPOINTMENT_SUCCESS
    }
}