import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import ContactForm from './components/Contactform';

function App() {
  // Sample product data
  const products = [
    { id: 1, name: 'Premium Cotton Bedsheets', price: '1,499', image: '/api/placeholder/300/200', category: 'Bedding' },
    { id: 2, name: 'Elegant Curtains', price: '1,999', image: '/api/placeholder/300/200', category: 'Window' },
    { id: 3, name: 'Handwoven Rugs', price: '2,499', image: '/api/placeholder/300/200', category: 'Floor' },
    { id: 4, name: 'Sofa Covers', price: '1,299', image: '/api/placeholder/300/200', category: 'Living' },
    { id: 5, name: 'Cushion Covers', price: '499', image: '/api/placeholder/300/200', category: 'Living' },
    { id: 6, name: 'Premium Cushions', price: '799', image: '/api/placeholder/300/200', category: 'Living' },
    { id: 7, name: 'Dining Table Mats', price: '899', image: '/api/placeholder/300/200', category: 'Dining' },
    { id: 8, name: 'Dining Table Covers', price: '1,199', image: '/api/placeholder/300/200', category: 'Dining' },
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Bedding', 'Window', 'Floor', 'Living', 'Dining'];
  
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="app">
      <Header />
      <Hero />
      <div className="container">
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <Products products={filteredProducts} />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;