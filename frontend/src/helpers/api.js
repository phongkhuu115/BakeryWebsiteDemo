import axios from 'axios';

const baseURL = 'http://localhost:3333/v1/api';

const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
  withCredentials: true,
});

export async function getRequest(URL) {
  return await axiosClient.get(`${baseURL + URL}`);
}

export async function postRequest(URL, payload) {
  return await axiosClient.post(`${baseURL + URL}`, payload);
}
