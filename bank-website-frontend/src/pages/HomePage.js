// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Heroes from '../components/Heroes';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Heroes />
      <Footer />
    </>
  );
};

export default HomePage;
