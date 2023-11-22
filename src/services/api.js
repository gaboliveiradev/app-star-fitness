import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';
//const API_URL = 'https://api.academiastarfitness.com.br/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  transformRequest: [function (data, headers) {

    if (headers['Content-Type'] && headers['Content-Type'] === 'multipart/form-data') {
      const form = new FormData();

      for (const key in data) {
        const value = data[key];

        if (Array.isArray(value)) {
          const arrayKey = `${key}[]`;

          value.forEach(v => {
            form.append(arrayKey, v);
          });
        } else {
          form.append(key, value);
        }
      }

      return form;
    }

    return data;
  }, ...axios.defaults.transformRequest]
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('app-star-fitness-token');

  config.headers.Authorization = `Bearer ${token}`
  return config
});

export default api