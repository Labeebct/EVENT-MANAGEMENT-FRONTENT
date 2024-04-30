const messageReducer = (state = [], action) => {

    switch (action.type) {
        case 'sort':
            const messages = action.payload
            state = messages
        default:
            return state;
    }
}

export default messageReducer  