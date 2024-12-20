import React from "react";
import "./EcommerceSolution.css";

const EcommerceSolution = () => {
  return (
    <div className="ecommerce-solution-container">
      <div className="main-ecommerce-solution-container">
        {/* Left Section */}
        <div className="text-content">
          <p className="intro-text">ALL-IN-ONE ECOMMERCE SOLUTION</p>
          <h4 className="title">WoodMart - WooCommerce Theme</h4>
          <p className="description">
            WoodMart WooCommerce theme for WordPress is the only thing you need
            to create your perfect online store. Use it for any kind of website:
            business, corporate, retail, multivendors.
          </p>
          <div className="button-group">
            <button className="btn read-more">READ MORE</button>
            <button className="btn contact-us">CONTACT US</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceSolution;
