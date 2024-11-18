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

  const signOut = () => {
    document.cookie = `username=;max-age=-1`;
    history.push('/signin');
  };

  const signUp = (username, password) => {
    document.cookie = `username=${username}`;
    const user = users.find((user) => user.username === username);

    if (!user) {
      document.cookie = `username=${username}`;
      setUsers((prev) => [...prev, { username, password }]);
    } else {
      alert('This user already signed up');
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
