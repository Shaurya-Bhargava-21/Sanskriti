// components/CartSidebar.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

function CartSidebar() {
  const { cart, cartOpen, setCartOpen, getTotalPrice, getCartCount } = useContext(CartContext);
  
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
    <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
      <div className="cart-sidebar-header">
        <h3>Your Cart ({getCartCount()})</h3>
        <button className="close-cart" onClick={() => setCartOpen(false)}>×</button>
      </div>
      
      <div className="cart-sidebar-items">
        {cart.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty</p>
        ) : (
          cart.map(item => <CartItem key={item.id} item={item} />)
        )}
      </div>
      
      {cart.length > 0 && (
        <div className="cart-sidebar-footer">
          <div className="cart-total">
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
      )}
    </div>
  );
}

export default CartSidebar;