import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    navigate('/cart');
  };

  const handleAddToTotalBarang = () => {
    navigate('/TotalBarang');
  };
  const handleAddProduct = () => {
    navigate('/addproduct');
  };
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h2>Cari Lah Product Terbaik Mu</h2>
        <p>Belanja di sini lebih murah dari store manapun</p>
      </section>
      <button onClick={handleAddProduct} className="add-product-btn">Add Product</button>

      {/* Product Listings */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={`http://localhost:5000/${product.image}`} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              
              <button onClick={handleAddToTotalBarang}>Check Out</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
