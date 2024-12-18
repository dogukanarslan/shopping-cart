export const request = async (url, method = 'GET', body, headers) => {
  const config = {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
  };
  const token = localStorage.getItem('token') || '';

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  if (body) {
    config.body = JSON.stringify(body);
  }

  return await (
    await fetch(`${import.meta.env.VITE_BASE_URL}${url}`, config)
  ).json();
};
