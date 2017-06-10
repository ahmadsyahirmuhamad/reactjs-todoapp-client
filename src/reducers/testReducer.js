const initialState = {
    foo: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FOO": {
            return {
                ...state,
                foo: action.payload
            }
        }
        default: {
            return state
        }
    }
}