// src/pages/ContactUs.js
import React from "react";
import "../styles/InfoPages.css";

const ContactUs = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Enter your message" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
