const token = window.sessionStorage.getItem("token")
const user_id = window.sessionStorage.getItem("user_id")

export function userLogin (session) {
    const url = "http://localhost:3001/api/app/v1/sessions"
    return fetch(url, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            session
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return {
            type: "FETCH_USER_SUCCESS",
            payload: responseJson
        }
    })
    .catch((error) => {
        return {
        type: "FETCH_USER_SUCCESS",
        payload: error
        }
    });
}


export function getUser () {
    const url = "http://localhost:3001/api/app/v1/users"
    return fetch(url, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
        }
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return {
            type: "FETCH_USER_SUCCESS",
            payload: responseJson
        }
    })
    .catch((error) => {
        return {
        type: "FETCH_USER_SUCCESS",
        payload: error
        }
    });
}


export function updateUser (user) {
    const url = "http://localhost:3001/api/app/v1/users/"+ user_id
    return fetch(url, {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
        },
        body: JSON.stringify({
            user
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return {
            type: "FETCH_USER_SUCCESS",
            payload: responseJson
        }
    })
    .catch((error) => {
        return {
        type: "FETCH_USER_SUCCESS",
        payload: error
        }
    });
}


