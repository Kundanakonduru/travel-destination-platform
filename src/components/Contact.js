import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log('Form submitted', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '20px'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 0 15px rgba(0,0,0,0.1)',
          padding: '30px',
          borderRadius: '8px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: '#f9f9f9'
        }}
      >
        <h2 style={{ color: 'blueviolet', textAlign: 'center', marginBottom: '25px' }}>
          <i><u>Contact Information</u></i>
        </h2>

        <p><b>Email Address:</b> <a href="mailto:abc@gmail.com">abc@gmail.com</a></p>
        <p><b>Phone number:</b> <a href="tel:+91##########">+91 ##########</a></p>
        <p><b>Office address:</b> India</p>
        <p><b>Working Hours:</b> Mon-Fri, 9 AM - 6 PM</p>

        <hr style={{ margin: '30px 0' }} />

        <h3 style={{ color: 'blueviolet', textAlign: 'center', marginBottom: '15px' }}>Send Us a Message</h3>

        {submitted && (
          <p
            style={{
              backgroundColor: '#d4edda',
              color: '#155724',
              padding: '10px',
              borderRadius: '4px',
              marginBottom: '15px',
              textAlign: 'center'
            }}
          >
            Thank you for contacting us! We'll get back to you soon.
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
              Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                border: errors.name ? '2px solid red' : '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                border: errors.email ? '2px solid red' : '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px' }}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>
              Message <span style={{ color: 'red' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                border: errors.message ? '2px solid red' : '1px solid #ccc',
                borderRadius: '4px',
                resize: 'vertical'
              }}
            />
            {errors.message && <small style={{ color: 'red' }}>{errors.message}</small>}
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'blueviolet',
              color: '#fff',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
