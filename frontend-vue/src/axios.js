import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5209/api/', // Замените на фактический URL вашего API
});

export default instance;