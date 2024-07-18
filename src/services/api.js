import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL base da sua API
  timeout: 5000, // Tempo limite da requisição (opcional)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
