// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">Skyline Bank</h1>
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/login">
          <button className="navbar-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="navbar-button">Signup</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
