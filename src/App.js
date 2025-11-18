import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  // *** IMPORTANT: REPLACE THE URL BELOW with your actual Render URL ***
  // Example: 'https://simple-node-api-xyz.onrender.com/'
  const API_URL = 'YOUR_RENDER_BACKEND_URL_HERE'; 

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(error => {
        console.error("Error fetching API:", error);
        setMessage("Failed to connect to the backend API.");
      });
  }, [API_URL]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN DevOps Practice App</h1>
        <p>Backend Message:</p>
        <p style={{ color: 'lightblue', fontWeight: 'bold' }}>{message}</p>
        <p>Status: Frontend deployed on Vercel, Backend deployed on Render.</p>
      </header>
    </div>
  );
}

export default App;