// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Call the login handler prop
    onLogin({ email, password });
    
    // Simulate successful login, then navigate to home
    navigate('/home');
  };

  const handleRegisterRedirect = () => {
    // Navigate to the Register page
    navigate('/register');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Belum punya akun? <button onClick={handleRegisterRedirect} className="register-button">Register</button></p>
    </div>
  );
};

export default Login;
