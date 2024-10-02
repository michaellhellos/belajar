import React, { useState } from 'react';
import axios from 'axios';

const StockOutForm = () => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [person, setPerson] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/stock/reduce', {
        productId,
        quantity,
        handledBy: person, // Ganti 'person' menjadi 'handledBy'
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error:', error.response.data.message);
      alert('Gagal mengeluarkan barang: ' + error.response.data.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={productId} 
        onChange={(e) => setProductId(e.target.value)} 
        placeholder="Product ID" 
        required 
      />
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))} 
        placeholder="Quantity" 
        required 
      />
      <input 
        type="text" 
        value={person} 
        onChange={(e) => setPerson(e.target.value)} 
        placeholder="Handled By" 
        required 
      />
      <button type="submit">Keluarkan Barang</button>
    </form>
  );
};

export default StockOutForm;
