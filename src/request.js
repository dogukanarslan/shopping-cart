import { getStorageValue } from './hooks/useLocalStorage';

export const request = async (url, method = 'GET', body, headers) => {
  const config = {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
  };
  const token = getStorageValue('token', '');

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${import.meta.env.VITE_BASE_URL}${url}`, config);

  return response.json();
};
