export const getDB = (key) => {
  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : data;
};

export const insertDB = (key, data) => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
  return data;
};
