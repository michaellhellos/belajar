// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Checkout Data:', formData);
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-container">
        <div className="checkout-form">
          <form onSubmit={handleSubmit}>
            <h3>Billing Information</h3>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter your address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="Enter your city"
              />
            </div>

            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                placeholder="Enter your postal code"
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="Enter your country"
              />
            </div>

            <button type="submit" className="checkout-button">Proceed to Payment</button>
          </form>
        </div>

        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <img src="product-image-1.jpg" alt="Product 1" />
            <div>
              <p>Product 1</p>
              <p>Quantity: 1</p>
              <p>$50.00</p>
            </div>
          </div>

          <div className="summary-item">
            <img src="product-image-2.jpg" alt="Product 2" />
            <div>
              <p>Product 2</p>
              <p>Quantity: 2</p>
              <p>$30.00</p>
            </div>
          </div>

          <div className="summary-total">
            <p>Total: $110.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
