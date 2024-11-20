// src/components/Overview.js
import React from "react";
import "../styles/Overview.css";

const Overview = () => {
  return (
    <div className="overview">
      <h1>Overview</h1>
      <div className="balance-card">
        <h2>Current Account Balance</h2>
        <p>$10,000</p>
      </div>
      <div className="balance-card">
        <h2>Savings Account Balance</h2>
        <p>$25,000</p>
      </div>
    </div>
  );
};

export default Overview;
