import axios from 'axios';

const baseURL = 'http://localhost:3333/v1/api';

export async function getRequest(URL) {
  return await axios(`${baseURL + URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
}

export async function getRequestToken(URL, token) {
  return await axios(`${baseURL + URL}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    withCredentials: true,
  });
}

export async function postRequest(URL, payload) {
  return await axios(`${baseURL + URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: payload,
    withCredentials: true,
  });
}

export async function postRequestToken(URL, payload, token) {
  return await axios(`${baseURL + URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    data: payload,
    withCredentials: true,
  });
}
