export const REGISTER_INIT = 'REGISTER_INIT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_INIT = 'LOGIN_INIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const ADMIN_INIT = 'ADMIN_INIT';
export const ADMIN_SUCCESS = 'ADMIN_SUCCESS';
export const REMOVE_ADMIN_INIT = 'REMOVE_ADMIN_INIT';
export const REMOVE_ADMIN_SUCCESS = 'REMOVE_ADMIN_SUCCESS';
export const GET_ADMIN_INIT = 'GET_ADMIN_INIT';
export const GET_ADMIN_SUCCESS = 'GET_ADMIN_SUCCESS';
export const LOGOUT_INIT = 'LOGOUT_INIT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CLEAR_REGISTERED_STATUS = 'CLEAR_REGISTERED_STATUS';
export const CLEAR_USER_REMOVED_STATUS= 'CLEAR_USER_REMOVED_STATUS';
export const UPDATE_USER = 'UPDATE_USER';


export const registerInit = (user) => {
    return {
        type:REGISTER_INIT,
        user: user
    }
}

export const registerSuccess = (id) => {
    return {
        type:REGISTER_SUCCESS,
        id: id
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

export const adminInit = (user) => {
    return {
        type:ADMIN_INIT,
        user: user
    }
}
export const adminSuccess = (user) => {
    return {
        type:ADMIN_SUCCESS,
        user: user
    }
}

export const removeAdminInit = (user) => {
    return {
        type:REMOVE_ADMIN_INIT,
        user: user
    }
}
export const removeAdminSuccess = (user) => {
    return {
        type:REMOVE_ADMIN_SUCCESS,
        user: user
    }
}

export const getAdminInit = () => {
    return {
        type:GET_ADMIN_INIT
    }
}
export const getAdminSuccess = (admins) => {
    return {
        type:GET_ADMIN_SUCCESS,
        admins: admins
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

export const clearUserRemovedStatus = () => {
    return {
        type:CLEAR_USER_REMOVED_STATUS
    }
}

export const updateUser = (user) => {
    return {
        type:UPDATE_USER,
        user: user
    }
}