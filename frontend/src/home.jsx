import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeAdmin.css'; // Assuming you have this CSS file

const HomeAdmin = () => {
  const [products, setProducts] = useState([]); // Store fetched products here
  const [productCount, setProductCount] = useState(0); // Store product count
  const [notifications, setNotifications] = useState([]); // Store notifications here
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

  // Fetch notifications for stock out
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch('http://localhost:5000/notifications'); // Endpoint to fetch notifications
        const data = await response.json();
        setNotifications(data); // Store notifications data
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  // Handle navigation to add products
  const handleAddProduct = () => {
    navigate('/addproduct');
  };

  // Handle receiving the stock item
  const handleAccept = async (notificationId) => {
    try {
      const response = await fetch(`http://localhost:5000/notifications/${notificationId}/accept`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const updatedNotification = await response.json();
        alert(updatedNotification.message);
        
        // Remove the accepted notification from the local state
        setNotifications(notifications.filter(notification => notification._id !== notificationId));
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error accepting notification:', error);
    }
  };

  // Handle rejecting the stock item
  const handleReject = (notificationId) => {
    console.log(`Rejected notification ID: ${notificationId}`);
    // Here you can add the logic to handle rejected notifications
    // e.g., update status in backend or UI
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
          <div className="summary-box">
            <h3>Stock gudang</h3>
            <button onClick={() => navigate('/kepalagudangliatbarang')}>Stock gudang</button>
          </div>
          <div className="summary-box">
            <h3>Barang keluar dari gudang</h3>
            <button onClick={() => navigate('/sales-overview')}>Barang keluar dari gudang</button>
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

        {/* Notifikasi Area */}
        <h3>Notifikasi Pengeluaran Barang</h3>
        <div className="notification-list">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div className="notification-card" key={notification._id}>
                <p>Barang: {notification.productName}</p>
                <p>Jumlah: {notification.quantity}</p>
                <p>Dikeluarkan oleh: {notification.handledBy}</p>
                <button onClick={() => handleAccept(notification._id)}>Terima</button>
                <button onClick={() => handleReject(notification._id)}>Tolak</button>
              </div>
            ))
          ) : (
            <p>Tidak ada notifikasi.</p>
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
