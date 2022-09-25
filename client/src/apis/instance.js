import axios from 'axios';
import { getToken } from 'utils/Storage';

export const instance = axios.create({
  baseURL: '',
});

instance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${getToken()}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      originalRequest.headers['Authorization'] = `Bearer ${getToken()}`;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
