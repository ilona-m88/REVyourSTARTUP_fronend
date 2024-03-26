import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Start from './StartPage';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import Form from './Registration'; // Import the Form component
import Header from './Header'
import './App.css';
import Year1 from './Year1';
import RevForm from './RevEngineerForm';
import ProForma from './ProForma';
import Year2 from './Year2Form';
import Year3 from './Year3Form';
import Depreciation from './DepreciationForm';

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
        <Route path="/" element={loggedIn ? <Navigate to="/start" /> : <Start isLoggedIn={handleLogin} />} />
        <Route path="/start" element={loggedIn ? <Start setLoggedIn={setLoggedIn} /> : <Navigate to="/" />} />
        {/* Route for registration */}
        <Route path="/register" element={<Form />} />
        <Route path="/revForm" element={<RevForm />} />
        <Route path="/proForma" element={<ProForma />} />
        <Route path="/year1" element={<Year1 />} />
        <Route path="/year2" element={<Year2 />} />
        <Route path="/year3" element={<Year3 />} />
        <Route path="/depreciation" element={<Depreciation />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;