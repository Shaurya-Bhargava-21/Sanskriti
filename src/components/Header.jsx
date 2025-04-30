// Updated components/Header.jsx
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartIcon from './CartIcon';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartOpen } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Sanskriti</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-right">
          <CartIcon />
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>
      {/* Add overlay when cart is open */}
      {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}></div>}
    </header>
  );
}

export default Header;
