import { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const { children } = props;

  const [username, setUsername] = useLocalStorage('username', '');
  const [token, setToken] = useLocalStorage('token', '');

  const history = useHistory();

  const signIn = async (username, password) => {
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
      setToken(token);
      history.push('/');
    }
  };

  const signOut = () => {
    setToken(null);
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
      setToken(token);
      history.push('/');
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, username, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
