// components/Products.jsx
function Products({ products }) {
    // Function to redirect to WhatsApp
    const redirectToWhatsApp = (productName) => {
      // Replace with your WhatsApp number
      const phoneNumber = '919760674343';
      const message = `Hi, I'm interested in purchasing the ${productName}. Can you provide more details?`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    };
  
    return (
      <section className="products" id="products">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
                <button 
                  className="buy-btn"
                  onClick={() => redirectToWhatsApp(product.name)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Products;