const initialState = {
    user: {
        token: null
    },
    fetching: false,
    fetch: false,
    error: false,
    isLoggedIn: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_USER_SUCCESS": {
            return {
                ...state,
                fetch: true,
                user: action.payload,
                error: false
            }
        }
        case "FETCH_USER_REJECTED": {
            return {
                ...state,
                fetch: false,
                error: true
            }
        }
        case "USER_LOGIN_SUCCESS": {
            return {
                ...state,
                fetch: true,
                user: action.payload,
                error: false,
                isLoggedIn: true
            }
        }
        case "USER_LOGOUT_SUCCESS": {
            return {
                ...state,
                isLoggedIn: action.payload
            }
        }
        default: {
            return state
        }
    }
}