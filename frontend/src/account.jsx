// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './account.css'; // Ensure this path is correct

const Account = () => {
  const [user] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUpdatePassword = () => {
    // Implement password update logic here
    console.log('Password updated:', password);
    setPassword(''); // Clear the password input after update
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logged out');
  };

  return (
    <div className="account-container">
      <h2>Account Details</h2>
      <div className="account-info">
        <div className="info-item">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="info-item">
          <strong>Email:</strong> {user.email}
        </div>
      </div>
      <div className="password-change">
        <h3>Change Password</h3>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleUpdatePassword}>Update Password</button>
      </div>
      <button className="logout-button" onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Account;
