import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { useAuthContext } from './contexts/AuthContext';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <h1>Sign In</h1>
      <Input
        label="Username"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        label="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Sign in</Button>
    </form>
  );
};
