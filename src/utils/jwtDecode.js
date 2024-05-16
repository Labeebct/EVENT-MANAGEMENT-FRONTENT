import { jwtDecode } from 'jwt-decode'

const decodeJwt = () => {
    const jwtToken = localStorage.getItem('jwt')
    const member = jwtToken && jwtDecode(jwtToken)
    return member
}

export default decodeJwt