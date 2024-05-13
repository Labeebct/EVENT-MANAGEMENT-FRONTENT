const initialState = {
    isModalOpen: false,
    proceedToPay: false,
    title: '',
    message: '',
    selectedDate: ''
};

const centerConfirm = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            const { advanceAmount, selectedDate, title, message, type } = action.payload
            return { ...state, isModalOpen: true, advanceAmount, selectedDate, title, message, type };
        case 'CLOSE_MODAL':
            return { ...state, isModalOpen: false };
        case 'PROCEED_PAYMENT':
            return { ...state, isModalOpen: false, proceedToPay: true }
        case 'CANCEL_PAYMENT':
            return { ...state, isModalOpen: false, proceedToPay: false }
        default:
            return state;

    }
}

export default centerConfirm;