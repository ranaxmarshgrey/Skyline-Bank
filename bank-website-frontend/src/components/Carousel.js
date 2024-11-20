// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import '../styles/Carousel.css';

const images = [
  'https://img.freepik.com/premium-vector/mobile-banking-online-internet-payment-mobile-application-service-money-transactions-flat-ca_170182-1139.jpg',
  'https://media.istockphoto.com/id/1362677049/vector/international-money-transfer-and-safe-transactions-a-female-user-sends-money-to-different.jpg?s=612x612&w=0&k=20&c=7MnE7pEnSUSNOvEnWDuhRgRB47px8UICWPA9mOVHR_4=',
  'https://projectopia.io/wp-content/uploads/2019/12/24x7-customer-support.png',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
        loading="lazy"
      />
    </div>
  );
};

export default Carousel;
