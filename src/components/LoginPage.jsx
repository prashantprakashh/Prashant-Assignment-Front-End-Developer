import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'bharatagri' && password === '1234') {
      navigate("/home");
    } else {
      setError('Password is incorrect');
      setPassword('');
    }
  };

  return (
    <div className="login-container">
      <div className="company-name">
        <span style={{ color: '#2ecc71' }}>Bharat</span>
        <span style={{ color: '#f1c40f' }}>Agri</span>
      </div>
      <h2>Login Page</h2>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
