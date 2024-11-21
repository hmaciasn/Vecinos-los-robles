import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tu-api.com/api', // Reemplazar con la URL de tu API
});

export const submitReport = (reportData) => api.post('/reports', reportData);
export const fetchReports = () => api.get('/reports');
