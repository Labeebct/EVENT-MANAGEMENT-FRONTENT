import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://event-management-backend-b6ht.onrender.com',
    timeout: 10000
})

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwt')

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;

}, (error) => {
    console.log(error);
    return Promise.reject(error)
})



export default axiosInstance     