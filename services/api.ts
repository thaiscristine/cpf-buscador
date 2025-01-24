import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://challenge-november-temporary.vercel.app/users',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});