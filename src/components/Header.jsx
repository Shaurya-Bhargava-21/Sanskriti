// Updated components/Header.jsx
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartIcon from './CartIcon';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartOpen, setCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>Sanskriti</h1>
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => {
              setIsMenuOpen(false);
              navigate('/', { replace: true });
              window.scrollTo(0, 0);
            }}>Home</Link></li>
            <li><a href="/#products" onClick={() => setIsMenuOpen(false)}>Products</a></li>
            <li><a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
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
