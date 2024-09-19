import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
});

http.interceptors.request.use(function (config) {
    config.headers.Authorization = `BEARER ${localStorage.getItem('token')}`;
    return config;
})

http.interceptors.response.use(function (response) {
    return response;
    },
    function (error) {
        if (error.response.status === 401) {
            localStorage.removeItem('token');
            location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export function createUser(user){
    console.log(user)
    return http.post('/users', user);
}