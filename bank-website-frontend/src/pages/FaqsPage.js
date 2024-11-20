// src/pages/FAQs.js
import React from "react";
import "../styles/InfoPages.css";

const FAQs = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">FAQs</h1>
      <div className="faq-container">
        <div className="faq-item">
          <h3>How can I open a bank account?</h3>
          <p>
            You can open a bank account by signing up on our website and completing the required verification steps. 
            Visit the Signup page to get started!
          </p>
        </div>
        <div className="faq-item">
          <h3>What is the minimum balance for a savings account?</h3>
          <p>The minimum balance required for a savings account is $500.</p>
        </div>
        <div className="faq-item">
          <h3>How do I contact customer support?</h3>
          <p>
            You can reach our 24/7 customer support team by visiting the Contact Us page and submitting your query.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
