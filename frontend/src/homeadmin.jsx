import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeAdmin.css';

const HomeAdmin = () => {
  const [products, setProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setProducts(data);
        setProductCount(data.length);
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
        const response = await fetch('http://localhost:5000/notifications');
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  const handleAddProduct = () => {
    navigate('/addproduct');
  };

  const handleAccept = async (notificationId) => {
    try {
      const response = await fetch(`http://localhost:5000/notifications/${notificationId}/accept`, {
        method: 'PATCH',
      });

      if (response.ok) {
        setMessage('Barang telah diterima.');
        fetchNotifications(); // Refresh notifications after accepting
      } else {
        setMessage('Gagal menerima barang.');
      }
    } catch (error) {
      console.error('Error accepting notification:', error);
      setMessage('Terjadi kesalahan saat menerima barang.');
    }
  };

  const handleReject = async (notificationId) => {
    try {
      const response = await fetch(`http://localhost:5000/notifications/${notificationId}/reject`, {
        method: 'PATCH',
      });

      if (response.ok) {
        setMessage('Barang telah ditolak.');
        fetchNotifications(); // Refresh notifications after rejecting
      } else {
        setMessage('Gagal menolak barang.');
      }
    } catch (error) {
      console.error('Error rejecting notification:', error);
      setMessage('Terjadi kesalahan saat menolak barang.');
    }
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
            <p>{productCount}</p>
          </div>
          <div className="summary-box">
            <h3>Manage Karyawan</h3>
            <button onClick={() => navigate('/kariawan')}>View Karyawan</button>
          </div>
          <div className="summary-box">
            <h3>Penjualan</h3>
            <button onClick={() => navigate('/sales-overview')}>Total Penjualan</button>
          </div>
          <div className="summary-box">
            <h3>Stock Gudang</h3>
            <button onClick={() => navigate('/kepalagudangliatbarang')}>Stock Gudang</button>
          </div>
          <div className="summary-box">
            <h3>Barang Keluar dari Gudang</h3>
            <button onClick={() => navigate('/sales-overview')}>Barang Keluar dari Gudang</button>
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

        {/* Notification Area */}
        <h3>Notifikasi Pengeluaran Barang</h3>
        <div className="notification-list">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div className="notification-card" key={notification._id}>
                <p>Barang: {notification.productName}</p>
                <p>Jumlah: {notification.quantity}</p>
                <p>Dikeluarkan oleh: {notification.handledBy}</p>
                <p>Status: {notification.isReceived ? 'Diterima' : 'Belum Diterima'}</p>
                <button onClick={() => handleAccept(notification._id)}>Terima</button>
                <button onClick={() => handleReject(notification._id)}>Tolak</button>
              </div>
            ))
          ) : (
            <p>Tidak ada notifikasi.</p>
          )}
        </div>

        {/* Feedback Message */}
        {message && <p className="feedback-message">{message}</p>}
      </main>

      <footer>
        <p>You are logged in as Admin</p>
      </footer>
    </div>
  );
};

export default HomeAdmin;
