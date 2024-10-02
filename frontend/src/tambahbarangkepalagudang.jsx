import React, { useState } from 'react';

const AddStock = () => {
  const [productId, setProductId] = useState('');
  const [itemType, setItemType] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddStock = async (e) => {
    e.preventDefault();

    // Reset messages
    setErrorMessage('');
    setSuccessMessage('');

    // Input validation
    if (!productId || !itemType || quantity <= 0) {
      setErrorMessage('Semua field harus diisi dan jumlah harus lebih dari 0');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/add-stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, itemType, quantity }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Stock berhasil ditambahkan');
        // Clear input fields after success
        setProductId('');
        setItemType('');
        setQuantity(0);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Error adding stock:', error);
      setErrorMessage('Terjadi kesalahan pada server');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Tambah Stock</h2>
      <form onSubmit={handleAddStock} style={styles.form}>
        <input
          type="text"
          placeholder="ID Produk"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Tipe Barang"
          value={itemType}
          onChange={(e) => setItemType(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Jumlah"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          min="1"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Tambah Stock</button>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

// Inline styles for better presentation
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default AddStock;
