import * as firebase from '../../firebase';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const registerSuccess = () => {
    return {
        type:REGISTER_SUCCESS
    }
}

export const registerAsync = (user) => {
    return (dispatch) => {
        firebase.auth.createUserWithEmailAndPassword(user.email, user.pswd)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.uid);
                firebase.db.collection('users').doc(user.uid).set(user)
                    .then((resp) => {
                        console.log("stored in db");
                        console.log(resp);
                        dispatch(registerSuccess());
                    });
            })
            .catch((error) => {
            });
    }
}