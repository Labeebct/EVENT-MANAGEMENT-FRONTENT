const initialState = {
    isModalOpen: false,
    proceedPending: false,
    proceedToPay: false,
    isLoading: false,
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
        case 'PROCEED':
            return { ...state, isModalOpen: false, proceedPending: true, isLoading: true }
        case 'PENDING':
            return { ...state, isModalOpen: true, proceedPending: true, selectedDate, title, message, type }
        case 'EVENT_CANCELED' :
            return {...state , isModalOpen:false , proceedPending:false }
        default:
            return state;

    }
}

export default centerConfirm;