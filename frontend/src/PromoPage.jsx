import React from 'react';
import './PromoPage.css';

function PromoPage() {
  return (
    <div className="promo-container">
      <header className="promo-header">
        <h1>Promo Terbaru</h1>
        <p>Jangan lewatkan promo eksklusif ini!</p>
      </header>

      <section className="promo-content">
        <div className="promo-card">
          <img src="https://via.placeholder.com/300x200" alt="Promo 1" />
          <div className="promo-info">
            <h2>Diskon 50% Produk Elektronik</h2>
            <p>Nikmati diskon besar untuk produk elektronik favorit Anda.</p>
            <button className="promo-button">Belanja Sekarang</button>
          </div>
        </div>

        <div className="promo-card">
          <img src="https://via.placeholder.com/300x200" alt="Promo 2" />
          <div className="promo-info">
            <h2>Buy 1 Get 1 Free!</h2>
            <p>Promo spesial untuk produk fashion. Jangan lewatkan!</p>
            <button className="promo-button">Belanja Sekarang</button>
          </div>
        </div>

        <div className="promo-card">
          <img src="https://via.placeholder.com/300x200" alt="Promo 3" />
          <div className="promo-info">
            <h2>Gratis Ongkir untuk Semua Pesanan</h2>
            <p>Dapatkan gratis ongkir tanpa minimum pembelian.</p>
            <button className="promo-button">Belanja Sekarang</button>
          </div>
        </div>
        <div className="promo-card">
          <img src="https://via.placeholder.com/300x200" alt="Promo 3" />
          <div className="promo-info">
            <h2>Gratis Ongkir untuk Semua Pesanan</h2>
            <p>Dapatkan gratis ongkir tanpa minimum pembelian.</p>
            <button className="promo-button">Belanja Sekarang</button>
          </div>
        </div>
        <div className="promo-card">
          <img src="https://via.placeholder.com/300x200" alt="Promo 3" />
          <div className="promo-info">
            <h2>Gratis Ongkir untuk Semua Pesanan</h2>
            <p>Dapatkan gratis ongkir tanpa minimum pembelian.</p>
            <button className="promo-button">Belanja Sekarang</button>
          </div>
        </div>
        <div className="promo-card">
          <img src="https://via.placeholder.com/300x200" alt="Promo 3" />
          <div className="promo-info">
            <h2>Gratis Ongkir untuk Semua Pesanan</h2>
            <p>Dapatkan gratis ongkir tanpa minimum pembelian.</p>
            <button className="promo-button">Belanja Sekarang</button>
          </div>
        </div>
      </section>

      <footer className="promo-footer">
        <p>&copy; 2024 LAZADA. Semua hak dilindungi undang-undang.</p>
      </footer>
    </div>
  );
}

export default PromoPage;
