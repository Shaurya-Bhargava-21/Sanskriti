// components/Footer.jsx
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>Sanskriti</h2>
                        <p>Premium home furnishings for every corner of your home.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <p>Email: Sanskriti@gmail.com</p>
                        <p>Phone: +91 9760674343</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sanskriti. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
