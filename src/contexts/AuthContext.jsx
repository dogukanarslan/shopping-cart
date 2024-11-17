import { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const { children } = props;

  const [users, setUsers] = useLocalStorage('users', []);
  const history = useHistory();

  const signIn = (username, password) => {
    const user = users.find((user) => user.username === username);

    if (user && user.password === parseInt(password)) {
      document.cookie = `username=${username}`;
      history.push('/');
    }
  };

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
