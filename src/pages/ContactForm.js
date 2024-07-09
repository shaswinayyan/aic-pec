import React from 'react';
import MapComponent from './MapComponent';
import './Contact.css';

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // Here you can handle form submission, e.g., send data to a server
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="form-image-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message"  />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
       
          <div className="contact-details">
            <p className="contact-title">Contact Us</p>
            <p>Mr. V. VishnuVaradan</p>
            <p>Chief Executive Officer,</p>
            <p>Atal Incubation Centre-PEC Foundation.</p>
            <p>Email: <a href="mailto:ceo@aicpecf.org">ceo@aicpecf.org</a></p>
            <p>Web: <a href="http://www.aicpecf.org" target="_blank" rel="noopener noreferrer">www.aicpecf.org</a></p>
            <p>Phone: +91-413-2960380</p>
            <p>Mobile: +91-8903467223</p>
        
        </div>
      </div>
      <div className="map-container">
        <MapComponent />
      </div>
    </div>
  );
}

export default ContactForm;