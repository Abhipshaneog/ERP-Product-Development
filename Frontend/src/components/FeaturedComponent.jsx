import React from "react";
import "./FeaturedComponent.css"; 

const FeaturedComponent = () => {
  const images = [
    {
      src: "https://woodmart.b-cdn.net/wp-content/uploads/2016/06/cat-23-430x430.jpg",
      name: "FURNITURE",
      products: 33,
    },
    {
      src: "https://woodmart.b-cdn.net/wp-content/uploads/2016/06/cat-klock-430x430.jpg",
      name: "CLOCKS",
      products: 12,
    },
    {
      src: "https://woodmart.b-cdn.net/wp-content/uploads/2016/06/cat-clock-3-430x430.jpg",
      name: "ACCESSORIES",
      products: 12,
    },
    {
      src: "https://woodmart.b-cdn.net/wp-content/uploads/2016/06/light-cat-5-430x430.jpg",
      name: "LIGHTING",
      products: 17,
    },
    {
      src: "https://woodmart.b-cdn.net/wp-content/uploads/2016/06/Toys-cat-1-430x430.jpg",
      name: "TOYS",
      products: 12,
    },
  ];

  return (
    <div className="featured-container">
      <div className="main-featured-container">
        <div className="wrapper">
          <p className="woodmart-collections">WOODMART COLLECTIONS</p>
          <h1 className="featured-categories">FEATURED CATEGORIES</h1>
          <p className="woodmart-description">
            WoodMart is a powerful eCommerce theme for WordPress
          </p>
        </div>
        <div className="row">
          {/* First column with the larger image */}
          <div className="column large-column">
            <div className="image-item">
              <img src={images[0].src} alt={images[0].name} />
              <h3 className="image-name">{images[0].name}</h3>
              <div className="image-overlay">
                <p className="product-count">{images[0].products} products</p>
              </div>
            </div>
          </div>

          {/* Second column with the 2x2 grid */}
          <div className="column grid-column">
            {images.slice(1).map((image, index) => (
              <div key={index} className="grid-item image-item">
                <img src={image.src} alt={image.name} />

                <h3 className="image-name">{image.name}</h3>
                <div className="image-overlay">
                  <p className="product-count">{image.products} products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedComponent;
