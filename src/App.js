import './App.css';
import Form from "./Form"
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const homeEndpoint = process.env.REACT_APP_HOME_ENDPOINT;
  useEffect(() => {
    async function fetchHomePage() {
      try {
        const response = await fetch(homeEndpoint);
        const data = await response.json();
        setMessage(data.Message); // Extracting the message from the response
      } catch (error) {
        console.error('Error fetching homepage:', error);
      }
    }

    fetchHomePage();
  }, []);

  return (
    <div className='App'>
      <h1>Home Page</h1>
      <p>{message}</p>
      <Form />
    </div>
  );
}

export default App;