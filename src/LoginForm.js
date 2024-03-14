import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { login } from './api';

function LoginForm({ isLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(username, password);

      if (response.status === 202) {
        isLoggedIn(true); // Set loggedIn to true upon successful login
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
        setError("Unable to authenticate user");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">
        <button>Register</button>
      </Link>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginForm;