import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const cookies = new Cookies();
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !password || !email) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('https://66cd8c028ca9aa6c8ccabb49.mockapi.io/api/v1/users', {
        username,
        password,
        email,
      });

      if (response.status === 201) {
        cookies.set('user', response.data, { path: '/' });
        setMessage(`User ${response.data.username} created successfully!`);
        
        router.push('/');
      } else {
        setMessage('Failed to create user.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error signing up. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
