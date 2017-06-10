initialState = {
    foo: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FOO": {
            return {
                ...state,
                foo: "bar"
            }
        }
        default: {
            return state
        }
    }
}