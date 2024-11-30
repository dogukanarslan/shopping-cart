import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="flex h-full items-center justify-center">
      <div className="w-1/4">
        <form
          onSubmit={handleSubmit}
          className="space-y-2 rounded bg-gray-50 p-10"
        >
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
        <div className="mt-2">
          <Link to="/signin">Sign in</Link>
        </div>
      </div>
    </div>
  );
};
