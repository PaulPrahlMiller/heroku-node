import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [item, setItem] = useState('Initial state');

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch('/api');
      const data = await response.json();
      setMessage(data.msg);
    };
    fetchFromApi();
  }, [message]);

  const handleClick = () => {
    setItem('Updated state');
  };

  return (
    <div className='App'>
      <h1>React App</h1>
      <h2>{message}</h2>
      <h3>State: {item}</h3>
      <button onClick={handleClick}>Update state</button>
    </div>
  );
}

export default App;
