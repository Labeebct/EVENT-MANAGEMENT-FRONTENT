import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:'http://localhost:8082/api/',
    timeout:10000
})

export default axiosInstance