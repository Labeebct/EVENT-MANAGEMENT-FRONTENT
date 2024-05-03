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
        case 'removeJwt':
            const role = action.payload
            if (role == 'admin') {
                localStorage.removeItem('jwt')
                state = null
                window.location.href = '/admin/login'
            } else {
                localStorage.removeItem('jwt')
                state = null
                window.location.href = '/login'
            }
    }
}

export default jwtAuthReducer