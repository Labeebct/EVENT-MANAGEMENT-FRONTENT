export const showGif = () => ({
    type: 'SHOW_GIF'
})
export const hideGif = () => ({
    type: 'HIDE_GIF'
})

const initialState = {
    gifShow: false
}

const showCongratGif = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_GIF':
            return { ...state, gifShow: true }
        case 'HIDE_GIF':
            return { ...state, gifShow: false }
        default:
            return state
    }
}

export default showCongratGif