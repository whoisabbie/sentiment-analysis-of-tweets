import axios from 'axios';

export const userLogin = (useremail, userpassword) => {
    return (dispatch, getState) => {
        axios.post('http://localhost:5000/auth/login', { useremail, userpassword })
            .then(res => {
                dispatch({ type: 'USER_LOGIN', user: res.data })
            })
            .catch(err => {
                dispatch({ type: 'USER_LOGIN_FAILED', err })
            });
    }
}

export const userRegister = (username, useremail, userpassword) => {
    return (dispatch, getState) => {
        axios.post('http://localhost:5000/auth/register', { username, useremail, userpassword })
            .then(res => {
                dispatch({ type: 'USER_REGISTER', data: res.data })
            })
            .catch(err => {
                dispatch({ type: 'USER_REGISTER_FAILED', err })
            });
    }
}