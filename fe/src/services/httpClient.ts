import axios from 'axios';
import { sleep } from '../utils/sleep';
import { localStorageKeys } from '../config/localStorageKeys';


export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

httpClient.interceptors.request.use(async config => {
  const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

httpClient.interceptors.response.use(async data => {
  await sleep(500);

  return data;
});