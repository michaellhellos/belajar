import { useNavigate } from 'react-router-dom';

function ProductSection() {
  const navigate = useNavigate();

  const handlePromoClick = () => {
    navigate('/promo');
  };

  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {/* Product cards... */}
      </div>
      <div>
        <button onClick={handlePromoClick}>Promo Terbaru</button>
      </div>
    </section>
  );
}

export default ProductSection;
