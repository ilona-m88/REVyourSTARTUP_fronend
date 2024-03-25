import React from 'react';
import './navbar.css';
import FinancialTable from './Year1';
function NavigationBar({ setActiveTab }) {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li onClick={() => setActiveTab('form1')}>Rev Valuation</li>
        <li onClick={() => setActiveTab('form2')}>Pro Forma</li>
        <li onClick={() => setActiveTab('form3')}>Depreciation</li>
        <li onClick={() => setActiveTab('form4')}>Year 1</li>
        <li onClick={() => setActiveTab('form5')}>Year 2</li>
        <li onClick={() => setActiveTab('form6')}>Year 3</li>
      </ul>
    </div>
  );
}

export default NavigationBar;