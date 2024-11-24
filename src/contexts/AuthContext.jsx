import { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

const SECRET = 'SECRET';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const { children } = props;

  const [users, setUsers] = useLocalStorage('users', []);
  const [username, setUsername] = useLocalStorage('username', '');

  const history = useHistory();

  const signIn = (username, password) => {
    const user = users.find((user) => user.username === username);

    if (user && user.password === parseInt(password)) {
      document.cookie = `token=${SECRET}`;
      setUsername(username);
      history.push('/');
    }
  };

  const signOut = () => {
    document.cookie = `username=;max-age=-1`;
    setUsername(null);
    history.push('/signin');
  };

  const signUp = (username, password) => {
    const user = users.find((user) => user.username === username);

    if (!user) {
      document.cookie = `token=${SECRET}`;
      setUsers((prev) => [...prev, { username, password }]);
      setUsername(username);
    } else {
      alert('This user already signed up');
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
