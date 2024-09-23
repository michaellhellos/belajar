import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeAdmin = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products or any data needed for the admin
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products'); // Update the endpoint if necessary
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle product management (e.g., adding, editing, deleting)
  const handleAddProduct = () => {
    navigate('/add-product'); // Navigate to the Add Product page
  };

  return (
    <div className="home-admin">
      <h2>Welcome, Admin</h2>
      <button onClick={handleAddProduct}>Add Product</button>

      <h3>Product List</h3>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.photo} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <p>Rating: {product.rating} - {product.sold} sold</p>
              <p>Location: {product.location}</p>
              {/* Add buttons for editing or deleting products */}
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default HomeAdmin;
