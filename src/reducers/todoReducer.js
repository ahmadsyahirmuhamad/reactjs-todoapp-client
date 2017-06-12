const initialState = {
    todo: {
        todo: {
            todos: {}
        }
    },
    fetching: false,
    fetch: false,
    error: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_TODO_SUCCESS": {
            return {
                ...state,
                fetch: true,
                todo: action.payload,
                error: false
            }
        }
        case "ADD_TODO_SUCCESS": {
            return {
                ...state,
                fetch: true,
                todo: {
                    todos: state.todo.todos.concat(action.payload.todos),
                },
                error: false
            }
        }
        case "FETCH_TODO_REJECTED": {
            return {
                ...state,
                fetch: false,
                error: true
            }
        }
        default: {
            return state
        }
    }
}