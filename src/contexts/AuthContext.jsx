import { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

const SECRET = 'SECRET';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const { children } = props;

  const [users, setUsers] = useLocalStorage('users', []);
  const [username, setUsername] = useLocalStorage('username', '');
  const [token, setToken] = useLocalStorage('token', '');

  const history = useHistory();

  const signIn = (username, password) => {
    const user = users.find((user) => user.username === username);

    if (user && user.password === password) {
      setToken(SECRET);
      setUsername(username);
      history.push('/');
    }
  };

  const signOut = () => {
    setToken(null);
    setUsername(null);
    history.push('/signin');
  };

  const signUp = (username, password) => {
    const user = users.find((user) => user.username === username);

    if (!user) {
      setUsers((prev) => [...prev, { username, password }]);
      setToken(SECRET);
      setUsername(username);
      history.push('/')
    } else {
      alert('This user already signed up');
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, username, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
