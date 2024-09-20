import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Data yang akan dikirim:', { email, password }); // Log data yang akan dikirim
    try {
      const response = await axios.post('http://localhost:5000/register', { email, password });
      console.log('Registration response:', response.data);
      alert(response.data.message);
    } catch (error) {
      console.error('Registration error:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
