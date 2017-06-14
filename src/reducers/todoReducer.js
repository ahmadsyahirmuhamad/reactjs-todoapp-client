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
                    todos: [action.payload.todos].concat(state.todo.todos),
                },
                error: false
            }
        }
        case "UPDATE_COMPLETE_TODO_SUCCESS": {
            return {
                ...state,
                fetch: true,
                todo: {
                    todos: state.todo.todos.map((todo, index) => {
                        if (todo.id === action.payload.todos.id) {
                            return action.payload.todos
                        } else {
                            return todo
                        }
                    })
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