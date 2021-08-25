import React from "react";

export const REGISTER_INIT = 'REGISTER_INIT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_INIT = 'LOGIN_INIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const registerInit = (user) => {
    return {
        type:REGISTER_INIT,
        user: user
    }
}

export const registerSuccess = () => {
    return {
        type:REGISTER_SUCCESS
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

