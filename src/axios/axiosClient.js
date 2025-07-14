// src/axiosClient.js
import axios from 'axios';

// Example: Replace with your token fetching logic (React Context, Redux, or localStorage)
const getToken = () => {
    const token = localStorage.getItem('token'); // or from context/store
    return token;
};

const axiosClient = axios.create({
    baseURL: 'https://laravel.bpc-bsis4d.com/public/api/',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: false,
});

axiosClient.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosClient;
