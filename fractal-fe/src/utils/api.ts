import axios, { AxiosResponse } from 'axios';
import { isLocalEnv } from './env';

const instance = axios.create({
  baseURL: isLocalEnv() ? 'http://localhost:8001/api/' : 'https://tbaas-bots-pool.azurewebsites.net/api/',
  headers: {
    Authorization: 'some-valid-token-in-reality',
  },
});

// Requests

export const createNewPayment = (data: Record<string, string>): Promise<AxiosResponse> => {
  return instance.post('/payment', data);
};

export const getPayments = (): Promise<AxiosResponse> => {
  return instance.get('/payment/list');
};
