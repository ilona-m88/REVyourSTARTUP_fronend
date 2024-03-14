import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { register } from './api'; // Import the register function

export default function Form() {
  // States for registration
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the register function from the API module
      const response = await register(username, email, password);
      if (response.status === 201) {
        setSubmitted(true);
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Showing success message */}
      <div className="messages">
        {error && <div className="error"><h1>An error occurred. Please try again.</h1></div>}
        {submitted && !error && <div className="success"><h1>User {username} successfully registered!</h1></div>}
      </div>

      <form onSubmit={handleSubmit} class="container">
        <div class="form-group">
        <label className="label">Username</label>
        <input onChange={(e) => setUsername(e.target.value)} className="input" value={username} type="text" />
        </div>
        <div class="form-group">
        <label className="label">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} className="input" value={email} type="email" />
        </div>
        <div class="form-group">
        <label className="label">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="input" value={password} type="password" />
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
      <Link to="/">
        <button>Back to Login</button>
      </Link>
    </div>
  );
}