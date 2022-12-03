import axios from "axios";
import {useObterToken} from "../hooks";

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        Accept: 'application/json',
        Content: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
    },

})

export default http;