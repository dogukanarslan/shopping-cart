import { useState, useEffect } from 'react';

const useFetch = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Fetch failed');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  }, [url]);

  return { data, isLoading, error, setData };
};

export default useFetch;
