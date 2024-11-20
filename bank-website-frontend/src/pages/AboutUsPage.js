// src/pages/AboutUs.js
import React from "react";
import "../styles/InfoPages.css";

const AboutUs = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">About Us</h1>
      <div className="about-us-section">
        <p>
          Welcome to Skyline Bank, where we prioritize your financial needs and provide unparalleled services. 
          Our journey began with a vision to make banking simple, secure, and accessible for everyone.
        </p>
        <p>
          At Skyline Bank, we believe in trust, transparency, and innovation. With a strong team of professionals 
          and state-of-the-art technology, we continue to deliver the best banking experience for our customers.
        </p>
        <h3>Our Mission</h3>
        <p>Empowering individuals and businesses through innovative financial solutions.</p>
        <h3>Our Vision</h3>
        <p>To be the most trusted and customer-centric bank globally.</p>
      </div>
    </div>
  );
};

export default AboutUs;
