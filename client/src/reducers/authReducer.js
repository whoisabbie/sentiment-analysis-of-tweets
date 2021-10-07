const isLoggedIn = localStorage.getItem('userToken') === null ? false : true;

const initState = {
    isLoggedIn,
    authError: null,
    authSuccess: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            localStorage.setItem('userToken', action.user.token)
            localStorage.setItem('userID', action.user.user.id)
            localStorage.setItem('userEmail', action.user.user.useremail)
            return {
                ...state,
                isLoggedIn: true,
                authError: null
            }

        case 'USER_LOGIN_FAILED':
            return {
                ...state,
                authError: action.err.response.data
            }

        case 'USER_LOGOUT':
            localStorage.clear();
            return {
                ...state,
                isLoggedIn: false,
                authError: null
            }

        case 'USER_REGISTER':
            return {
                ...state,
                authSuccess: action.data
            }

        case 'USER_REGISTER_FAILED':
            return {
                ...state,
                authError: action.err.response.data
            }

        default:
            return state;
    }
}

export default authReducer