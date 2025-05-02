// components/ProductDetails.jsx
import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  
  // Find the product based on the ID from URL params
  const product = products.find(p => p.id === parseInt(id));
  
  // State for selected image
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Redirect if product not found
  useEffect(() => {
    if (!product) {
      navigate('/');
    }
  }, [product, navigate]);
  
  if (!product) return null;
  
  // Function to redirect to WhatsApp
  const redirectToWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '919760674343';
    const message = `Hi, I'm interested in purchasing ${quantity}x ${product.name} costing ₹${product.price} each. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  const handleAddToCart = () => {
    // Add to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-details-page">
      <div className="container">
        <div className="breadcrumbs">
          <span onClick={() => navigate('/')}>Home</span> &gt; 
          <span onClick={() => navigate('/')}>{product.category}</span> &gt; 
          <span>{product.name}</span>
        </div>
        
        <div className="product-details-container">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img 
                src={product.images[selectedImage] || product.image} 
                alt={product.name} 
              />
            </div>
            <div className="thumbnail-images">
              {product.images.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img} alt={`${product.name} view ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-price">₹{product.price}</div>
            
            {/* Stock status */}
            <div className="stock-status">
              {product.stock > 0 ? (
                <span className="in-stock">In Stock ({product.stock} available)</span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>
            
            {/* Short description */}
            <div className="product-short-description">
              {product.description}
            </div>
            
            {/* Quantity selector */}
            <div className="quantity-selector">
              <span>Quantity:</span>
              <div className="quantity-controls">
                <button onClick={decrementQuantity} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={incrementQuantity} disabled={quantity >= product.stock}>+</button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                Add to Cart
              </button>
              <button 
                className="buy-now-btn"
                onClick={redirectToWhatsApp}
                disabled={product.stock <= 0}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Product details tabs */}
        <div className="product-details-tabs">
          <div className="tabs-container">
            <div className="tab-panel">
              <h3>Features</h3>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="tab-panel">
              <h3>Specifications</h3>
              <table className="specifications-table">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="tab-panel">
              <h3>Reviews ({product.reviews.length})</h3>
              {product.reviews.length > 0 ? (
                <div className="reviews-list">
                  {product.reviews.map(review => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <span className="review-author">{review.user}</span>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < review.rating ? 'star filled' : 'star'}>★</span>
                          ))}
                        </div>
                      </div>
                      <div className="review-comment">
                        {review.comment}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
        {/* Related products section could be added here */}
      </div>
    </div>
  );
}

export default ProductDetails;