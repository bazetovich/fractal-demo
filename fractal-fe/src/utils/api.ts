import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  // Will be dynamic based on env
  baseURL: 'http://localhost:8001/api/',
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
