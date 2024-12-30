import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://woodmart.xtemos.com/wp-content/uploads/2021/04/blog-title-bg6-opt.jpg",
    // "https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-1-furnit-1.jpg",
    "https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-1-furnit-2.jpg"
  ];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-slider">
        <img
          src={images[currentImageIndex]}
          alt="Hero Image"
          className="hero-image"
        />
      </div>

      {/* Dots for Image Navigation */}
      <div className="dots-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentImageIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
