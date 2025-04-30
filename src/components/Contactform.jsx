import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfIWTbvrS6Uc5e9tiNWQdWRlxdNksasXluYNFMopEi3836UUw/viewform?embedded=true"
          width="100%" // Full width of the container
          height="600" // Adjust height as needed
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
}

export default ContactForm;
