import * as firebase from '../../firebase';
import React from "react";

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const registerSuccess = () => {
    return {
        type:REGISTER_SUCCESS
    }
}

export const registerAsync = (user) => {
    debugger;
    return (dispatch) => {
        firebase.createAccount(user)
            .then(dispatch(registerSuccess()));
        /*auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((resp) => {
                const userId = resp.user.uid;
                alert('userCreated');
                firebase.db.collection('users').doc(userId).set(user)
                    .then((resp) => {
                       // dispatch(registerSuccess())
                    });
            });*/
    }
}

export const login = (user) => {
    return {
        type:LOGIN_SUCCESS,
        user: user
    }
}

export const loginAsync = (user) => {
    debugger;
    return (dispatch) => {
        firebase.auth.signInWithEmailAndPassword(user.email, user.password)
            .then((resp) => {
                alert('user logged in');
                const userId = resp.user.uid;
                console.log(resp);
/*                firebase.db.collection('users').doc(userId).get()
                    .then((userData) => {
                        console.log(userData);
                       // dispatch(login(userData));
                    })*/
            });
    }
}