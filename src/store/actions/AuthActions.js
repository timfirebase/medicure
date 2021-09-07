export const REGISTER_INIT = 'REGISTER_INIT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_INIT = 'LOGIN_INIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REMOVE_USER_INIT = 'REMOVE_USER_INIT';
export const LOGOUT_INIT = 'LOGOUT_INIT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CLEAR_REGISTERED_STATUS = 'CLEAR_REGISTERED_STATUS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_INIT = 'UPDATE_USER_INIT';
export const CLEAR_PROFILE_UPDATE_STATUS= 'CLEAR_PROFILE_UPDATE_STATUS';
export const CLEAR_IS_NOT_REGISTERED_STATUS= 'CLEAR_IS_NOT_REGISTERED_STATUS';
export const CLEAR_LOGIN_ERROR_STATUS= 'CLEAR_LOGIN_ERROR_STATUS';

export const registerInit = (user,mode) => {
    return {
        type:REGISTER_INIT,
        user: user,
        mode: mode
    }
}

export const registerSuccess = (id) => {
    return {
        type:REGISTER_SUCCESS,
        id: id
    }
}

export const registerFail = (error) => {
    return {
        type:REGISTER_FAIL,
        error : error
    }
}

export const loginInit = (user) => {
    return {
        type:LOGIN_INIT,
        user: user
    }
}

export const loginSuccess = (user) => {
    return {
        type:LOGIN_SUCCESS,
        user: user
    }
}

export const removeUserInit = (user,mode) => {
    return {
        type:REMOVE_USER_INIT,
        user: user,
        mode: mode
    }
}

export const logoutInit = () => {
    return {
        type:LOGOUT_INIT
    }
}

export const logoutSuccess = () => {
    return {
        type:LOGOUT_SUCCESS
    }
}

export const clearRegisteredStatus = () => {
    return {
        type:CLEAR_REGISTERED_STATUS
    }
}

export const updateUserSuccess = (user) => {
    return {
        type:UPDATE_USER_SUCCESS,
        user: user
    }
}

export const updateUserInit = (user,currentUser) => {
    return {
        type:UPDATE_USER_INIT,
        user: user,
        currentUser:currentUser
    }
}

export const clearProfileUpdateStatus = () => {
    return {
        type:CLEAR_PROFILE_UPDATE_STATUS
    }
}

export const clearIsNotRegisteredStatus = () => {
    return {
        type:CLEAR_IS_NOT_REGISTERED_STATUS
    }
}

export const clearLoginErrorStatus = () => {
    return {
        type:CLEAR_LOGIN_ERROR_STATUS
    }
}


export const loginFail = (error) => {
    return {
        type:LOGIN_FAIL,
        error : error
    }
}