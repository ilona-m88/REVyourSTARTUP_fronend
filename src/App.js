import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import Form from './Registration'; // Import the Form component
import Header from './Header'
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic, set loggedIn to true upon successful login
    setLoggedIn(true);
  };

  return (
    <div>
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/dashboard" /> : <LoginForm isLoggedIn={handleLogin} />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/" />} />
        {/* Route for registration */}
        <Route path="/register" element={<Form />} />
      </Routes>
      {/* Button to redirect to registration (only shown when not logged in) */}
      {!loggedIn && (
        <Link to="/register">
          <button>Register</button>
        </Link>
      )}
    </Router>
    </div>
  );
}

export default App;