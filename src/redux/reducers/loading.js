const initialState = {
    isLoading: false
}

const loadingReducer = (state = initialState, action) => {
    if (action.type === 'loading') {
        return { ...initialState, isLoading: action.payload }
    }

    return state
}

export default loadingReducer