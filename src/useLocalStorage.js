import { useEffect, useState } from 'react';

export const getStorageValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
  const [data, setData] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};
