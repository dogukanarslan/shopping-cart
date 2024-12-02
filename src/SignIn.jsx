import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@nextui-org/react';
import { useAuthContext } from './contexts/AuthContext';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submitted')

    signIn(username, password);
  };

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-1/4 rounded bg-gray-50 p-10">
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
        <div className="mt-2">
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </div>
  );
};
