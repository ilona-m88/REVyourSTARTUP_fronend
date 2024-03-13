import React from 'react';
import './navbar.css'; 
function NavigationBar({ setActiveTab }) {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li onClick={() => setActiveTab('form1')}>Form 1</li>
        <li onClick={() => setActiveTab('form2')}>Form 2</li>
        <li onClick={() => setActiveTab('form3')}>Form 3</li>
        <li onClick={() => setActiveTab('form4')}>Form 4</li>
        <li onClick={() => setActiveTab('form5')}>Form 5</li>
        <li onClick={() => setActiveTab('form6')}>Form 6</li>
      </ul>
    </div>
  );
}

export default NavigationBar;