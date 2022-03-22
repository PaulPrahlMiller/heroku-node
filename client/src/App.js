import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchFromApi = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setMessage(data.msg);
    };
    fetchFromApi();
  }, [message]);

  return (
    <div className="App">
      <h1>React App</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
