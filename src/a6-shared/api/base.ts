import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sycret.ru/service/api/api',
});

export const API_URL = 'https://sycret.ru/service/api/api';

instance.interceptors.request.use((config) => {
    return config;
});

export default instance;
