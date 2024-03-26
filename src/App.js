import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ReverseEvaluation from './pages/ReverseEvaluation';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/ReverseEvaluation" element={<ReverseEvaluation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
