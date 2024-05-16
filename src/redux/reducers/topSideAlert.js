export const sideAlert = (msg) => ({
    type: 'TOP_RIGHT_ALERT',
    payload: msg
})

const initialState = {
    message: null
}

const sideTopAlert = (state = initialState, action) => {
    switch (action.type) {
        case 'TOP_RIGHT_ALERT':
            return { ...state, message: action.payload }
        default:
            return state
    }
}

export default sideTopAlert