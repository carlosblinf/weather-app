/* eslint-disable import/prefer-default-export */
import axios, { AxiosResponse } from 'axios';

const BASE_URL =
  'https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max&current_weather=true&timezone=America%2FNew_York&';
const API_TIMEOUT = 30000;

const api = axios.create({
  timeout: API_TIMEOUT,
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});
api.interceptors.response.use(
  (response: any) => {
    if (response.status === 200 && response.data) return response.data;
    return response;
  },
  (error: Error) => {
    console.log(error.message);
  }
);
export default api;
