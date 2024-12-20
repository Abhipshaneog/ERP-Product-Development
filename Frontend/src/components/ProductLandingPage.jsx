import React from "react";
import "./ProductLandingPage.css"; // Add your custom styles here

const ProductLandingPage = () => {
  return (
    <div className="product-landing-container">
      <div className="product-landing-content">
        {/* Left Side Image */}
        <div className="product-image-container">
          <img
            src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/chair-new-shadow-opt-4.png.webp" 
            alt="Vitra Chair"
            className="product-image"
          />
        </div>

        {/* Right Side Text */}
        <div className="product-details">
          <div className="product-header">
            <h1 className="product-title">PRODUCT LANDING PAGE</h1>
            <h2 className="product-name">Vitra Chair - Classic Design</h2>
          </div>
          <div className="product-info">
            <div className="designer">
              <h4>DESIGNER:</h4>
              <p><em>Charles, Ray Eames</em></p>
            </div>
            <div className="materials">
              <h4>MATERIALS:</h4>
              <p><em>Wood, Leather, Metal</em></p>
            </div>
            <div className="client">
              <h4>CLIENT:</h4>
              <p><em>Woodmart, Base</em></p>
            </div>
          </div>
          <div className="product-footer">
            <p className="price">$1999.00</p>
            <button className="add-to-cart-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLandingPage;
