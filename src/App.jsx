// Updated App.jsx with routing
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import ContactForm from './components/Contactform';
import CartPage from './components/CartPage';
import CartSidebar from './components/CartSidebar';
import ProductDetails from './components/ProductDetails';
import { CartProvider } from './context/CartContext';
import ScrollTop from './components/ScrollTop';

function App() {
  // Sample product data with more details
  const products = [
    { 
      id: 1, 
      name: 'Premium Cotton Bedsheets', 
      price: '1,499', 
      image: '/api/placeholder/300/200',
      images: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ],
      category: 'Bedding',
      description: 'Experience luxurious comfort with our premium 100% cotton bedsheets. Featuring a high thread count of 300 TC, these sheets offer exceptional softness and durability. The breathable fabric keeps you cool in summer and warm in winter.',
      features: [
        '100% Pure Cotton',
        '300 Thread Count',
        'Fade Resistant',
        'Size: King (108" x 108")',
        'Includes: 1 Bedsheet, 2 Pillow Covers'
      ],
      specifications: {
        'Material': 'Pure Cotton',
        'Thread Count': '300 TC',
        'Size': 'King (108" x 108")',
        'Color': 'Available in multiple colors',
        'Package Contents': '1 Bedsheet, 2 Pillow Covers',
        'Care Instructions': 'Machine wash cold, Tumble dry low'
      },
      reviews: [
        { id: 1, user: 'Priya S.', rating: 5, comment: 'Exceptionally soft and comfortable. The quality is outstanding!' },
        { id: 2, user: 'Rahul M.', rating: 4, comment: 'Great quality for the price. Colors remain vibrant after multiple washes.' }
      ],
      stock: 15
    },
    { 
      id: 2, 
      name: 'Elegant Curtains', 
      price: '1,999', 
      image: '/api/placeholder/300/200',
      images: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ],
      category: 'Window',
      description: 'Add a touch of elegance to your windows with our premium curtains. Made from high-quality polyester blend fabric, these curtains provide excellent light blocking capabilities while enhancing your home décor.',
      features: [
        'Blackout Technology',
        'Noise Reduction',
        'Thermal Insulation',
        'Size: 7 ft x 4 ft (per panel)',
        'Set of 2 panels'
      ],
      specifications: {
        'Material': 'Polyester Blend',
        'Size': '7 ft x 4 ft (per panel)',
        'Panels': '2',
        'Hanging Style': 'Rod Pocket',
        'Care Instructions': 'Dry clean only'
      },
      reviews: [
        { id: 1, user: 'Anita K.', rating: 5, comment: 'These curtains completely block out light. Perfect for my bedroom!' },
        { id: 2, user: 'Suresh P.', rating: 5, comment: 'Great quality and beautiful design. Very satisfied.' }
      ],
      stock: 8
    },
    { 
      id: 3, 
      name: 'Handwoven Rugs', 
      price: '2,499', 
      image: '/api/placeholder/300/200',
      images: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ],
      category: 'Floor',
      description: 'Our handwoven rugs are crafted by skilled artisans using traditional techniques. Each rug features intricate patterns and vibrant colors that add warmth and character to any room in your home.',
      features: [
        'Handwoven by skilled artisans',
        'Made from 100% wool',
        'Non-slip backing',
        'Size: 5 ft x 7 ft',
        'Stain-resistant treatment'
      ],
      specifications: {
        'Material': '100% Wool',
        'Size': '5 ft x 7 ft',
        'Thickness': '15 mm',
        'Backing Material': 'Cotton with anti-slip coating',
        'Care Instructions': 'Vacuum regularly, Professional cleaning recommended for stains'
      },
      reviews: [
        { id: 1, user: 'Meera J.', rating: 5, comment: 'Beautiful craftsmanship! The colors are even more vibrant in person.' },
        { id: 2, user: 'Ajay T.', rating: 4, comment: 'Excellent quality. The non-slip backing is very effective.' }
      ],
      stock: 5
    },
    { 
      id: 4, 
      name: 'Sofa Covers', 
      price: '1,299', 
      image: '/api/placeholder/300/200',
      images: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ],
      category: 'Living',
      description: 'Protect your sofa and give it a fresh new look with our premium sofa covers. Made from stretchable fabric that fits most standard sofas, these covers are easy to install and machine washable.',
      features: [
        '4-way stretch fabric',
        'Universal fit for 3-seater sofas',
        'Anti-slip foam anchors',
        'Protects from spills and stains',
        'Machine washable'
      ],
      specifications: {
        'Material': 'Polyester Spandex Blend',
        'Suitable For': '3-seater sofas (70"-90")',
        'Style': 'Slipcover',
        'Installation': 'Elastic edges, no tools required',
        'Care Instructions': 'Machine wash cold, Line dry'
      },
      reviews: [
        { id: 1, user: 'Kavita R.', rating: 5, comment: 'Perfect fit for my sofa. Completely transformed my living room!' },
        { id: 2, user: 'Deepak S.', rating: 4, comment: 'Great quality and easy to install. Stays in place well.' }
      ],
      stock: 12
    },
    { 
      id: 5, 
      name: 'Cushion Covers', 
      price: '499', 
      image: '/api/placeholder/300/200',
      images: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ],
      category: 'Living',
      description: 'Add a pop of color and style to your living space with our decorative cushion covers. Featuring intricate embroidery work and high-quality cotton fabric, these covers are both beautiful and durable.',
      features: [
        'Hand-embroidered details',
        '100% cotton fabric',
        'Hidden zipper closure',
        'Size: 16" x 16"',
        'Set of 5 covers'
      ],
      specifications: {
        'Material': '100% Cotton',
        'Size': '16" x 16"',
        'Closure Type': 'Hidden Zipper',
        'Quantity': 'Set of 5',
        'Care Instructions': 'Machine wash cold, Tumble dry low'
      },
      reviews: [
        { id: 1, user: 'Nisha V.', rating: 5, comment: 'The embroidery work is exquisite! I love these cushion covers.' },
        { id: 2, user: 'Vikram A.', rating: 5, comment: 'Great quality and the colors are vibrant. A quick way to refresh your decor.' }
      ],
      stock: 20
    },
    { 
      id: 6, 
      name: 'Premium Cushions', 
      price: '799', 
      image: '/api/placeholder/300/200',
      images: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ],
      category: 'Living',
      description: 'Experience ultimate comfort with our premium cushions. Filled with high-quality microfiber and covered with soft cotton fabric, these cushions provide both support and luxury for your home.',
      features: [
        'Premium microfiber filling',
        'Soft cotton outer fabric',
        'Non-flattening design',
        'Size: 18" x 18"',
        'Hypoallergenic'
      ],
      specifications: {
        'Material': 'Cotton cover with microfiber filling',
        'Size': '18" x 18"',
        'Fill Weight': '500g per cushion',
        'Shape': 'Square',
        'Care Instructions': 'Spot clean only'
      },
      reviews: [
        { id: 1, user: 'Arjun K.', rating: 4, comment: 'Very comfortable cushions. They\'ve maintained their shape well over time.' },
        { id: 2, user: 'Divya M.', rating: 5, comment: 'Luxurious feel and great support. Worth every penny!' }
      ],
      stock: 15
    },
    { 
      id: 7, 
      name: 'Dining Table Mats', 
      price: '899', 
      image: '/api/placeholder/300/200',
      images: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ],
      category: 'Dining',
      description: 'Protect your dining table and enhance your dining experience with our elegant table mats. Made from heat-resistant, easy-to-clean materials, these mats combine functionality with sophisticated design.',
      features: [
        'Heat resistant up to 100°C',
        'Waterproof and stain-resistant',
        'Non-slip bottom',
        'Size: 12" x 18"',
        'Set of 6 mats'
      ],
      specifications: {
        'Material': 'PVC and Polyester Blend',
        'Size': '12" x 18"',
        'Quantity': 'Set of 6',
        'Thickness': '3mm',
        'Care Instructions': 'Wipe clean with damp cloth'
      },
      reviews: [
        { id: 1, user: 'Ravi S.', rating: 5, comment: 'Excellent quality mats. Easy to clean and very durable.' },
        { id: 2, user: 'Neha P.', rating: 4, comment: 'These mats look elegant and protect my table well. Great purchase!' }
      ],
      stock: 10
    },
    { 
      id: 8, 
      name: 'Dining Table Covers', 
      price: '1,199', 
      image: '/api/placeholder/300/200',
      images: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ],
      category: 'Dining',
      description: 'Protect your dining table with our premium waterproof table covers. Featuring elegant designs and durable materials, these covers are perfect for everyday use and special occasions alike.',
      features: [
        'Waterproof and spill-resistant',
        'Heat resistant surface',
        'Anti-slip backing',
        'Size: 60" x 90" (fits 6-seater tables)',
        'Decorative printed design'
      ],
      specifications: {
        'Material': 'PVC with Flannel backing',
        'Size': '60" x 90"',
        'Shape': 'Rectangular',
        'Pattern': 'Printed design',
        'Care Instructions': 'Wipe clean with damp cloth'
      },
      reviews: [
        { id: 1, user: 'Alok R.', rating: 5, comment: 'Excellent quality cover. Protects my expensive dining table perfectly.' },
        { id: 2, user: 'Sarika M.', rating: 4, comment: 'Beautiful design and good quality. Easy to clean after spills.' }
      ],
      stock: 7
    },
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Bedding', 'Window', 'Floor', 'Living', 'Dining'];
  
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <CartSidebar />
          
          <Routes>
            <Route path="/" element={
              <>
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
              </>
            } />
            <Route path="/product/:id" element={<ProductDetails products={products} />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;