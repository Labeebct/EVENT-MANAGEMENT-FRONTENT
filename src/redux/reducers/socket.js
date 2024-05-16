const initialState = {
    socket: null
}

const socket = (state = initialState, action) => {
    if (action.type == 'socket') {
        return { ...state, socket: action.payload }
    }
    return state
}

export default socket