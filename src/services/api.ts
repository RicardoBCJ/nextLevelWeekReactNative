import axios from 'axios';

export const api = axios.create({
    // baseURL: 'http://192.168.0.2:3333'
    baseURL: 'http://192.168.15.42:3333/'
})