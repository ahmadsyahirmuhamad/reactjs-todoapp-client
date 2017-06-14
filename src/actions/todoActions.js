const token = window.sessionStorage.getItem("token")


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


export function updateCompleteTodo (id, boolean) {
    const url = "http://localhost:3001/api/app/v1/todos/"+ id
    return fetch(url, {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
        },
        body: JSON.stringify({
            todo: {
                complete: boolean
            }
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return {
            type: "UPDATE_COMPLETE_TODO_SUCCESS",
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


