export const REGISTER_ADMIN_SUCCESS = 'ADMIN_SUCCESS';
export const REMOVE_ADMIN_SUCCESS = 'REMOVE_DOC_SUCCESS';
export const GET_ADMIN_INIT = 'GET_ADMIN_INIT';
export const GET_ADMIN_SUCCESS = 'GET_ADMIN_SUCCESS';
export const CLEAR_USER_REMOVED_STATUS= 'CLEAR_USER_REMOVED_STATUS';

export const registerAdminSuccess = (user) => {
    return {
        type:REGISTER_ADMIN_SUCCESS,
        user: user
    }
}

export const removeAdminSuccess = (id) => {
    return {
        type:REMOVE_ADMIN_SUCCESS,
        id: id
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

export const clearUserRemovedStatus = () => {
    return {
        type:CLEAR_USER_REMOVED_STATUS
    }
}