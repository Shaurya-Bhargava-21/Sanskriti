// Updated components/Products.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Products({ products }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  // Function to redirect to WhatsApp
  const redirectToWhatsApp = (productName, price) => {
    // Replace with your WhatsApp number
    const phoneNumber = '919760674343';
    const message = `Hi, I'm interested in purchasing the ${productName} costing ${price}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  // Function to navigate to product details page
  const goToProductDetails = (productId) => {
    navigate(`/product/${productId}`);
  };
  
  return (
    <section className="products" id="products">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div 
              className="product-image" 
              onClick={() => goToProductDetails(product.id)}
            >
              <img src={product.image} alt={product.name} />
              <div className="view-details-overlay">
                <span>View Details</span>
              </div>
            </div>
            <div className="product-info">
              <h3 onClick={() => goToProductDetails(product.id)}>
                {product.name}
              </h3>
              <p className="price">₹{product.price}</p>
              <div className="product-buttons">
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button 
                  className="buy-btn"
                  onClick={() => redirectToWhatsApp(product.name, product.price)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;