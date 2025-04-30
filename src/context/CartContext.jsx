import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage if available
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [cartOpen, setCartOpen] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      // Check if product already exists in cart
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If it exists, increase quantity
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it doesn't exist, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Decrease quantity of item in cart
  const decreaseQuantity = (productId) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity - 1;
          // If quantity becomes 0, this product will be filtered out
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0); // Remove items with quantity 0
    });
  };

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      // Remove commas from price string and convert to number
      const priceNum = parseFloat(item.price.replace(/,/g, ''));
      return total + (priceNum * item.quantity);
    }, 0);
  };

  // Get total number of items in cart
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Toggle cart sidebar
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <CartContext.Provider value={{
      cart,
      cartOpen,
      addToCart,
      removeFromCart,
      decreaseQuantity,
      getTotalPrice,
      getCartCount,
      toggleCart,
      setCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
};