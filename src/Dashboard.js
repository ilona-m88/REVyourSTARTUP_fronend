import React from 'react';
import NavigationBar from './NavigationBar';


function Dashboard({ setLoggedIn }) {
  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <div className="dashboard">
      <NavigationBar />
      <button onClick={handleLogout}>Logout</button>
    </div>
    
  );
}

export default Dashboard;