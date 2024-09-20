import React, { useState } from 'react';

const Cart = () => {
  // Daftar barang dengan nama dan harga
  const items = [
    { id: 1, name: 'Item A', price: 100 }
  ];

  // State untuk menyimpan jumlah barang yang diinput pengguna
  const [quantities, setQuantities] = useState(items.map(() => 0)); // Default semua 0

  // Fungsi untuk menghitung total harga
  const calculateTotal = () => {
    return items.reduce((total, item, index) => {
      return total + item.price * quantities[index];
    }, 0);
  };

  // Fungsi untuk menangani perubahan input jumlah barang
  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Number(value); // Ubah ke angka
    setQuantities(newQuantities);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name} - ${item.price} per unit
            <br />
            <label>Quantity: </label>
            <input
              type="number"
              value={quantities[index]}
              min="0"
              onChange={(e) => handleQuantityChange(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
      <hr />
      <h3>Total Price: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
