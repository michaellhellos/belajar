import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homekepalagudang.css'; // Importing CSS for styles

const HomeKepalaGudang = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logging out (e.g., clearing local storage or state)
    alert('Anda telah keluar');
    navigate('/login'); // Navigate back to the login page
  };
  return (
    <div className="home-container">
      <h1>Selamat Datang, Kepala Gudang!</h1>
      <div className="home-actions">
        <button className="action-button" onClick={() => navigate('/tambahbarangkepalagudang')}>
          Tambah Barang
        </button>
        <button className="action-button" onClick={() => navigate('/barang_keluar_darigudang')}>
          Barang Keluar
        </button>
        <button className="action-button" onClick={() => navigate('/kepalagudangliatbarang')}>
          Lihat Stok
        </button>
        <button className="action-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomeKepalaGudang;
