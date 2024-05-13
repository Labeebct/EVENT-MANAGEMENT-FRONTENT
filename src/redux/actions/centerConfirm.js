const BOOK_EVENT_REQUEST = 'BOOK_EVENT_REQUEST';
const BOOK_EVENT_SUCCESS = 'BOOK_EVENT_SUCCESS';
const BOOK_EVENT_FAILURE = 'BOOK_EVENT_FAILURE';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';


export const openModal = (type,title, message, selectedDate, advanceAmount) => ({
    type: OPEN_MODAL,
    payload: {
        type,
        title,
        message,
        selectedDate,
        advanceAmount,
    },
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});
