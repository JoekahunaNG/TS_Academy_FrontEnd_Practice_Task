import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      // Use application/x-www-form-urlencoded and no-cors mode
      // This is necessary because the target endpoint does not have CORS headers for localhost
      await fetch('https://whitebricks.com/tsacademy.php', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      // Show success message as long as the fetch call itself didn't fail
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' }); // Reset form

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ 
        submitting: false, 
        success: false, 
        error: 'Failed to send communication. Please try again later.' 
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Establish <span className="text-gradient">Contact</span></h2>
            <p>Have questions about our data or want to contribute to the Cosmos Explorer project? Send us a transmission.</p>
          </div>
          
          <div className="form-container glass">
            {status.success ? (
              <div className="success-message">
                <h3>Transmission Received!</h3>
                <p>Thank you for reaching out. We will process your message shortly.</p>
                <button onClick={() => setStatus({ submitting: false, success: false, error: null })} className="btn-primary" style={{marginTop: '1rem'}}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Commander Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={validationErrors.name ? 'error' : ''}
                    placeholder="Enter your name"
                  />
                  {validationErrors.name && <span className="error-text">{validationErrors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Comms Address (Email)</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={validationErrors.email ? 'error' : ''}
                    placeholder="Enter your email address"
                  />
                  {validationErrors.email && <span className="error-text">{validationErrors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Transmission Data (Message)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={validationErrors.message ? 'error' : ''}
                    placeholder="Type your message here..."
                  ></textarea>
                  {validationErrors.message && <span className="error-text">{validationErrors.message}</span>}
                </div>

                {status.error && <div className="submit-error">{status.error}</div>}

                <button 
                  type="submit" 
                  className={`btn-submit ${status.submitting ? 'submitting' : ''}`}
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Transmitting...' : 'Send Transmission'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
