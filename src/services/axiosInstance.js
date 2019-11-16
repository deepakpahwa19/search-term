import axios from 'axios';

const config = {
    baseURL: 'https://api-demo.sentisum.com/api/v1/comments',
    headers: { Accept: 'application/json' },
    timeout: 30000
}

const axiosInstance = axios.create(config);

export default axiosInstance;
