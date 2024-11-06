import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const { children } = props;

  const [username, setUsername] = useState('johndoe');
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider value={{ username, token }}>
      {children}
    </AuthContext.Provider>
  );
};
