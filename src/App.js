import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import Form from './Registration'; // Import the Form component
import Year1 from './Year1';
import Header from './Header'
import './App.css';

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
        <Route path="/" element={loggedIn ? <Navigate to="/dashboard" /> : <Year1 isLoggedIn={handleLogin} />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard setLoggedIn={setLoggedIn} /> : <Navigate to="/" />} />
        {/* Route for registration */}
        <Route path="/register" element={<Form />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;