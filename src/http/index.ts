import axios from "axios";
import {useObterToken} from "../hooks";

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json',
        // Authorization: `Bearer ${sessionStorage.getItem('token')}`
    },

})

http.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = sessionStorage.getItem('token')
    if(token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config

}, function (error) {
    // Do something with request error
    console.log('Erro no interceptor do axios.')
    return Promise.reject(error);
});


export default http;