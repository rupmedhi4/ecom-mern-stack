import axios from "axios";
import React, { useState } from "react";
import './ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/contactUs`,
        {
          fullName: formData.name,
          email: formData.email,
          number: formData.phone,
        },
        { withCredentials: true }
      );
      console.log(res);
      alert("Your message has been sent successfully");
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error sending contact us data: ', error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
