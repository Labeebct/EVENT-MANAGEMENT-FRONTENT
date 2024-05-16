export const addBooking = (booking) => ({
    type: 'UPDATE_BOOKING',
    payload: booking
})

const initialState = null

const updateBooking = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_BOOKING':
            return action.payload
        default:
            return state

    }
}

export default updateBooking