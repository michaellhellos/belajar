import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeAdmin.css'; // Assuming you have this CSS file

const HomeAdmin = () => {
  const [products, setProducts] = useState([]); // Store fetched products here
  const [productCount, setProductCount] = useState(0); // Store product count
  const navigate = useNavigate();

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products'); // Ensure this endpoint matches your backend
        const data = await response.json();
        setProducts(data); // Store the products data
        setProductCount(data.length); // Set the product count based on the data
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle navigation to add products
  const handleAddProduct = () => {
    navigate('/addproduct');
  };

  return (
    <div className="home-admin">
      <header>
        <h1>Welcome Admin</h1>
      </header>

      <main>
        <div className="admin-summary">
          <div className="summary-box">
            <h3>Total Products</h3>
            <p>{productCount}</p> {/* This will show the total number of products */}
          </div>
          <div className="summary-box">
            <h3>Manage kariawan</h3>
            <button onClick={() => navigate('/kariawan')}>View kariawan</button>
          </div>
          <div className="summary-box">
            <h3>Penjualan</h3>
            <button onClick={() => navigate('/sales-overview')}>Total Penjualan</button>
          </div>
        </div>

        <h3>Product List</h3>
        <button onClick={handleAddProduct} className="add-product-btn">Add Product</button>

        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="product-card" key={product._id}>
                <img src={product.photo} alt={product.name} />
                <h4>{product.name}</h4>
                <p>${product.price}</p>
                <p>Rating: {product.rating} - {product.sold} sold</p>
                <p>Location: {product.location}</p>
                <div className="product-actions">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </main>

      <footer>
        <p>You are logged in as Admin</p>
      </footer>
    </div>
  );
};

export default HomeAdmin;
