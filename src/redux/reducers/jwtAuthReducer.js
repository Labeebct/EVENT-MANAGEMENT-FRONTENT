const jwtAuthReducer = (state = null, action) => {
    
    switch (action.type) {
        case 'setJwt':
            const token = action.payload
            localStorage.setItem('jwt', token)
            return token
        case 'getJwt':
            const token1 = action.payload
            return token1
        default:
            return state;
    }
}

export default jwtAuthReducer