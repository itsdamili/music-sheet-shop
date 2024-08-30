import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import PrimaryButton from '../components/buttons/PrimaryButton';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const cookies = new Cookies();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.get('https://66cd8c028ca9aa6c8ccabb49.mockapi.io/api/v1/users');
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setMessage(`Welcome, ${user.username}!`);
        cookies.set('user', user, { path: '/' });

        router.push('/');
      } else {
        setMessage('Invalid username or password');
      }
    } catch (error) {
      setMessage('Error logging in. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <PrimaryButton type="submit">Login</PrimaryButton>

      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
