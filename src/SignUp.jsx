import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { useAuthContext } from './contexts/AuthContext';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <h1>Sign Up</h1>
      <Input
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">Sign up</Button>
    </form>
  );
};
