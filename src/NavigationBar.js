import React from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/revForm">Rev Form</Link></li>
        <li><Link to="/proForma">Pro Forma</Link></li>
        <li><Link to="/year1">Year 1 form</Link></li>
        <li><Link to="/depreciation">Depreciation form</Link></li>
        <li><Link to="/year2">Year 2 form</Link></li>
        <li><Link to="/year3">Year 3 form</Link></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default NavigationBar;