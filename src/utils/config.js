import axios from "axios";

const defaultOptions = {
    baseURL: "http://localhost:8085",
    // baseURL: "http://95.46.96.45:8085",
    headers: {
        'Content-Type': 'application/json',
    },
};

let axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export default axiosInstance;

export const url = "http://localhost:8085"
// export const url = "http://95.46.96.45:8085"