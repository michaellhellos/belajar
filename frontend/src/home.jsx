// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from 'react-router-dom';
import './home.css';
import photo1 from './assets/1.jpeg';
import photo2 from './assets/bintang.jpg';
import lokasi from './assets/lokasi.jpeg';
import ipad from './assets/ipad.jpg';
import mac from './assets/mac.png';
import iphone13 from './assets/iphone13.jpeg';
import iphonese3 from './assets/iphonese3.jpeg';
import ipadpro from './assets/ipadpro.jpg';
// import vgartx from './assets/vgartx.jpeg'
// import laptoplegion from './assets/laptoplegion.jpeg'
// import samsungs24 from './assets/samsungs24.png'
const Home = () => {
  const navigate = useNavigate();

  const handlePromoClick = () => {
    navigate('/promo');
  };

  const handleAddToCart = () => {
    navigate('/cart');
  };
  const handleAddToTotalBarang = () => {
    navigate('/TotalBarang');
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

      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* Product 1 */}
          <div className="product-card">
          <img src={photo1} alt="Product 1" />
            <h3>Iphone 16</h3>
            <p>$19.99</p>
          <div className="rating">
            <img src={photo2} alt="Bintang" className="star-icon" />
            <span>4.5     100Rb Terjual</span> 
          </div>
          <div className="rating">
            <img src={lokasi} alt="Bintang" className="star-icon" />
            <span>Surabaya</span> 
          </div>
            <button onClick={handleAddToTotalBarang}>Check Out</button>
          </div>

          <div className="product-card">
          <img src={ipad} alt="Product 1" />
            <h3>Ipad Air M2</h3>
            <p>$29.99</p>
            <div className="rating">
            <img src={photo2} alt="Bintang" className="star-icon" />
            <span>4.5     500++ Terjual</span> 
          </div>
          <div className="rating">
            <img src={lokasi} alt="Bintang" className="star-icon" />
            <span>Jakarta</span> 
          </div>
            <button onClick={handleAddToCart}>Check Out</button>
          </div>

          <div className="product-card">
          <img src={mac} alt="Product 1" />
            <h3>Mac Book Air M3 512</h3>
            <p>$39.99</p>
            <div className="rating">
            <img src={photo2} alt="Bintang" className="star-icon" />
            <span>4.5     500++ Terjual</span> 
          </div>
          <div className="rating">
            <img src={lokasi} alt="Bintang" className="star-icon" />
            <span>Jakarta</span> 
          </div>
            <button>Check Out</button>
          </div>

          <div className="product-card">
          <img src={iphone13} alt="Product 1" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <div className="rating">
            <img src={photo2} alt="Bintang" className="star-icon" />
            <span>4.5     500++ Terjual</span> 
          </div>
          <div className="rating">
            <img src={lokasi} alt="Bintang" className="star-icon" />
            <span>Jakarta</span> 
          </div>
            <button>Check Out</button>
          </div>
          
          <div className="product-card">
          <img src={iphonese3} alt="Product 1" />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <div className="rating">
            <img src={photo2} alt="Bintang" className="star-icon" />
            <span>4.5     500++ Terjual</span> 
          </div>
          <div className="rating">
            <img src={lokasi} alt="Bintang" className="star-icon" />
            <span>Jakarta</span> 
          </div>
            <button>Check Out</button>
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
