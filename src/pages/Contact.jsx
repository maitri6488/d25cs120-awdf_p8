import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2 className="page-title">Contact & Support</h2>
      <span className="info-badge">Lazy Chunk: Contact-[hash].js (Loaded on demand)</span>

      {submitted ? (
        <div className="card" style={{ background: '#f0fff4', borderColor: '#9ae6b4' }}>
          <h3 style={{ color: '#276749' }}>Message Sent!</h3>
          <p>Thank you, {formData.name}. We have received your feedback.</p>
          <button
            style={{ marginTop: '12px', background: '#38a169' }}
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', message: '' });
            }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="card">
          <div className="form-group">
            <label htmlFor="name">Student / User Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g. Maitri Sheta"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="d25cs120@charusat.edu.in"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message ({formData.message.length}/200 characters)</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              maxLength={200}
              required
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
