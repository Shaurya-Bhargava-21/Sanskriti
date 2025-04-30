// components/CartPage.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

function CartPage() {
  const { cart, getTotalPrice, getCartCount } = useContext(CartContext);
  
  // Function to redirect to WhatsApp with all cart items
  const redirectToWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '919760674343';
    
    // Create message with all cart items
    let message = 'Hello, I would like to order the following items:\n\n';
    
    cart.forEach(item => {
      message += `${item.quantity}x ${item.name} - ₹${item.price} each\n`;
    });
    
    // Add total price
    message += `\nTotal: ₹${getTotalPrice().toLocaleString('en-IN')}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <section className="cart-page">
      <div className="container">
        <h2>Your Shopping Cart</h2>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <a href="#products" className="btn">Continue Shopping</a>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-row">
                <span>Items:</span>
                <span>{getCartCount()}</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>₹{getTotalPrice().toLocaleString('en-IN')}</span>
              </div>
              <button 
                className="checkout-btn"
                onClick={redirectToWhatsApp}
              >
                Checkout via WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CartPage;