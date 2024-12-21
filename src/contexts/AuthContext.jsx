import { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { request } from '../request';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const { children } = props;

  const [username, setUsername] = useLocalStorage('username', '');

  const history = useHistory();

  const signIn = async (username, password) => {
    const data = request('/api/login', 'POST', {
      username,
      password,
    });

    if (data.token) {
      localStorage.setItem('token', JSON.stringify(data.token));
      history.push('/');
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUsername(null);
    history.push('/signin');
  };

  const signUp = async (username, password) => {
    const res = await (
      await fetch(`${import.meta.env.VITE_BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
    ).json();

    const token = res.token;

    if (token) {
      history.push('/');
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
