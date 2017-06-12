const token = window.sessionStorage.getItem("token")
const user_id = window.sessionStorage.getItem("user_id")


export function getTodos () {
    const url = "http://localhost:3001/api/app/v1/todos"
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
            type: "FETCH_TODO_SUCCESS",
            payload: responseJson
        }
    })
    .catch((error) => {
        return {
        type: "FETCH_TODO_REJECTED",
        payload: error
        }
    });
}


export function addTodo (todo) {
    const url = "http://localhost:3001/api/app/v1/todos"
    return fetch(url, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
        },
        body: JSON.stringify({
            todo
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return {
            type: "ADD_TODO_SUCCESS",
            payload: responseJson
        }
    })
    .catch((error) => {
        return {
        type: "FETCH_TODO_REJECTED",
        payload: error
        }
    });
}
