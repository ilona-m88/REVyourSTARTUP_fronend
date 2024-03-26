import React from 'react';
import Dashboard from './Dashboard';


function Start({ setLoggedIn }) {
    const handleLogout = () => {
        setLoggedIn(false);
    }

    return (
        
            <div>
                <Dashboard />
                <h1>Hello?</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        
    );
}

export default Start;