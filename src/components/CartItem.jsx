// components/CartItem.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartItem({ item }) {
  const { removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p className="cart-item-price">₹{item.price}</p>
        <div className="cart-item-quantity">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
      </div>
      <button 
        className="cart-item-remove" 
        onClick={() => removeFromCart(item.id)}
      >
        ×
      </button>
    </div>
  );
}

export default CartItem;