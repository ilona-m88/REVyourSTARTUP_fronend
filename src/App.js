import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './pages/Login';
import RegistrationForm from './pages/Registration';
import LandingPage from './pages/LandingPage.js'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        {/* Redirect from base URL to /register */}
        <Route path="/" element={<Navigate replace to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App;
