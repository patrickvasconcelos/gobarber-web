import axios from 'axios';

const api = axios.create({ baseURL: 'http://172.21.54.27:3333' });

export default api;
