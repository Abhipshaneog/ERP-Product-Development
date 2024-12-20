import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./FeaturedCategories.css";

const FeaturedCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedButton, setSelectedButton] = useState("BEST SELLERS");

  const images = [
    "https://woodmart.b-cdn.net/wp-content/uploads/2016/09/product-furniture-4-3-430x491.jpg",
    "https://woodmart.b-cdn.net/wp-content/uploads/2016/08/product-accessories-8-1-430x491.jpg",
    "https://woodmart.b-cdn.net/wp-content/uploads/2016/09/product-furniture-19-430x491.jpg",
    "https://woodmart.b-cdn.net/wp-content/uploads/2016/08/product-accessories-10-2-430x491.jpg",
    "https://woodmart.b-cdn.net/wp-content/uploads/2016/08/product-furniture-11-3-430x490.jpg",
    "https://woodmart.b-cdn.net/wp-content/uploads/2017/04/dock-black-walnut-ip6-grid-B1_1-430x491.jpg",
    "https://woodmart.b-cdn.net/wp-content/uploads/2016/08/product-furniture-14-2-430x491.jpg",
    "https://woodmart.b-cdn.net/wp-content/uploads/2016/09/product-furniture-8-2-430x490.jpg",
  ];

  const productDetails = {
    title: "Smart Watches Wood Edition",
    category: "Accessories, Clocks",
    price: "$599.00",
    description:
      "Himenaeos parturient nam a justo placerat lorem erat pretium a fusce pharetra pretium enim sagittis ut nunc neque torquent sem a leo. Dictumst himenaeos primis torquent ridiculus.",
    colors: ["#ff0000", "#00ff00", "#0000ff", "#f0f0f0", "#000000"], // Example colors
  };

  const handleButtonClick = (category) => {
    setSelectedButton(category);
  };

  return (
    <div className="featured-categories-container">
      <div className="main-featured-categories-container">
        <p className="wooden-accessories">WOODEN ACCESSORIES</p>
        <h1 className="featured-products">FEATURED PRODUCTS</h1>
        <p className="shop-description">
          Visit our shop to see amazing creations from our designer
        </p>
        <div className="buttons-container">
          {["BEST SELLERS", "FEATURED", "SALES"].map((category) => (
            <div
              key={category}
              className={`category-button ${selectedButton === category ? "selected" : ""}`}
              onClick={() => handleButtonClick(category)}
            >
              {category}
            </div>
          ))}
        </div>

        <div className="products-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className={`product-card ${hoveredIndex === index ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="product-image"
              />

              {/* Colors Section */}
              <div className="color-options-container">
                <div className="color-options">
                  {productDetails.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="color-circle"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>

              <h3 className="product-title">{productDetails.title}</h3>
              <div className="product-category">{productDetails.category}</div>
              <div className="product-price">{productDetails.price}</div>

              <div className="hover-details">
                <div className="product-description">
                  {productDetails.description}
                </div>
                <div className="action-buttons">
                  <button className="heart-button"><i className="fa-regular fa-heart"></i></button>
                  <button className="readmore-button">Read More</button>
                  <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
