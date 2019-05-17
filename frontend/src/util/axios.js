import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
    baseURL: config.URL_ANRON_API,
    timeout: config.TIMEOUT
});

export default axiosInstance;