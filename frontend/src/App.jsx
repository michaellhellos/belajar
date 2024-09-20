// App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login';
import Register from './Register';
import Home from './home';
import PromoPage from './PromoPage'; // Import PromoPage component
import Cart from './cart'; // Import Cart component
import Account from './account'; // Import Account component
import Checkout from './Checkout';
import TotalBarang from './Total_Barang';
import './App.css'; // Import your global styles


const App = () => {
  const handleLogin = (credentials) => {
    // Simulate login logic or call an API here.
    console.log('Logged in with:', credentials);
  };

  const handleRegister = (credentials) => {
    console.log('Register:', credentials);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/promo" element={<PromoPage />} /> {/* Route for Promo Page */}
          <Route path="/cart" element={<Cart />} /> {/* Route for Cart Page */}
          <Route path="/account" element={<Account />} /> {/* Route for Account Page */}
          <Route path="/checkout" element={<Checkout />} /> {/* Route for Checkout Page */}
          <Route path="/totalbarang" element={<TotalBarang />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect any unknown routes to the login page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
