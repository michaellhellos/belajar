// StockPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StockPage.css'; // Import custom styling

const StockPage = () => {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get('http://localhost:5000/stock');
        console.log(response.data); // Check the data structure
        // Ensure the data is an array
        setStock(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (err) {
        setError('Error fetching stock data');
        setLoading(false);
      }
    };

    fetchStock();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading stock data...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="stock-container">
      <h2>Stock Barang</h2>
      {stock.length === 0 ? (
        <p>No stock data available.</p>  // Display message if stock is empty
      ) : (
        <table className="stock-table">
          <thead>
            <tr>
              <th>ID Produk</th>
              <th>Nama Produk</th>
              <th>Warna</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((item) => (
              <tr key={item._id}>
                <td>{item.productId}</td>
                <td>{item.name}</td>
                <td>{item.color ? item.color.join(', ') : 'N/A'}</td>
                <td>{item.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StockPage;
