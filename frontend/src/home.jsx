// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handlePromoClick = () => {
    navigate('/promo');
  };

  const handleAddToCart = () => {
    navigate('/cart');
  };

  

  return (
    <div className="home-container">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="hero">
        <h2>Cari Lah Product Terbaik Mu</h2>
        <p>Belaja Di Sini Lebih Murah Dari Store Manapun</p>
      </section>
     
      {/* Product Listings */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Product 1 */}
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
            <button>Add to Cart</button>
          </div>
          {/* Product 2 */}
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$29.99</p>
            <button>Add to Cart</button>
          </div>
          {/* Product 3 */}
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          
          {/* Add more products as needed */}
        </div>
        <br />
        <br />
        <br />
        <br />
          <header className="header">
        <div className="logo">
          <h1>LAZADA</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/account">Akun</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Cari Lah Product Terbaik Mu</h2>
        <p>Belaja Di Sini Lebih Murah Dari Store Manapun</p>
      </section>
      <div>
            <button onClick={handlePromoClick}>Promo Terbaru</button>
          </div>
      </section>
      <section className="live-section">
        <h2>Live Now</h2>
        <div className="live-content">
                  <iframe 
            src="https://www.youtube.com/embed/Xu1wA7CfhQg" 
            frameBorder="0" 
            allowFullScreen 
            title="Live Stream"
            className="live-stream"
          ></iframe>  
             <iframe 
            src="https://www.youtube.com/embed/watch?v=mbi5V6v2peY" 
            frameBorder="0" 
            allowFullScreen 
            title="Live Stream"
            className="live-stream"
          ></iframe> 
             <iframe 
            src="https://www.youtube.com/embed/Xu1wA7CfhQg" 
            frameBorder="0" 
            allowFullScreen 
            title="Live Stream"
            className="live-stream"
          ></iframe> 
          <p>Join our live stream to explore the latest deals and products!</p>
        </div>
      </section>
      {/* homeberu */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Product 1 */}
          <div className="product-card">
          <img src="./assets/2.png" alt="Product 1" />
            <h3>Product 1</h3>
            <p>$19.99</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
          {/* Product 2 */}
          <div className="product-card">
            <img src="./assets/2.png" alt="Product 2" />
            <h3>Product 2</h3>
            <p>$29.99</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
          {/* Product 3 */}
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Add to Cart</button>
          </div>
          
          {/* Add more products as needed */}
        </div>  
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 My Online Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
