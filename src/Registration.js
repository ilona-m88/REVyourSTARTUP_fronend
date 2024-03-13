import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
  // States for registration
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}register/`, {
        username: username,
        email: email,
        password: password
      });
      if (response.status === 201) {
        // Registration successful
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
        {submitted && <div className="success"><h1>User {username} successfully registered!</h1></div>}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Labels and inputs for form data */}
        <label className="label">Username</label>
        <input onChange={(e) => setUsername(e.target.value)} className="input" value={username} type="text" />

        <label className="label">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} className="input" value={email} type="email" />

        <label className="label">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="input" value={password} type="password" />

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}