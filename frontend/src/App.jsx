import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Register from './Register';
import Home from './home';
import PromoPage from './PromoPage'; // Pastikan Anda sudah membuat komponen PromoPage
import './App.css';

const App = () => {
  const handleLogin = (credentials) => {
    // Simulate login logic or call an API here.
    console.log('Logged in with:', credentials);
    // After a successful login, you can redirect to the Home page.
    // Normally, you would handle authentication state here.
  };

  const handleRegister = (credentials) => {
    console.log('Register:', credentials);
    // Implement your register logic here
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/promo" element={<PromoPage />} /> {/* Tambahkan rute untuk halaman promo */}
          <Route path="*" element={<Navigate to="/" />} />  {/* Redirect any unknown routes to the login page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
