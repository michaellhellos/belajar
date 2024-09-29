import React, { useState } from 'react';
import axios from 'axios';
import './addproduct.css'

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // to control success state

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form data to send
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('image', image);

    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:5000/add-product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (response.status === 201) {
        setMessage('Produk berhasil ditambahkan.');
        setIsSuccess(true); // set success status
        // Reset form
        setName('');
        setPrice('');
        setStock('');
        setImage(null);
      } else {
        setMessage('Gagal menambahkan produk. Silakan coba lagi.');
        setIsSuccess(false); // set failure status
      }
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('Terjadi kesalahan. Silakan coba lagi.');
      setIsSuccess(false); // set failure status
    }
  };

  return (
    <div className="add-product-container">
      <h2>Tambah Produk Baru</h2>
      {message && (
        <p style={{ color: isSuccess ? 'green' : 'red' }}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="add-product-form">
        <div>
          <label>Nama Produk:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Harga:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Stok:</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Gambar Produk:</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Tambah Produk</button>
      </form>
    </div>
  );
};

export default AddProduct;
