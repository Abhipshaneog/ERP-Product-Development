import React, { useState } from "react";
import "./OffCanvas.css";

const OffCanvas = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("menu");

  const menuLinks = [
    "Home",
    "Demos",
    "Shop",
    "Blog",
    "Portfolio",
    "Pages",
    "Wishlist",
    "Compare",
    "Login / Register",
  ];

  const categoriesLinks = [
    "Furniture",
    "Lighting",
    "Accessories",
    "Clocks",
    "Cooking",
    "Electronics",
    "Minimalism",
    "Fashion",
    "Toys",
  ];

  const linksToDisplay = activeTab === "menu" ? menuLinks : categoriesLinks;

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`off-canvas-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      ></div>

      {/* Off-Canvas Menu */}
      <div
        className={`off-canvas-menu ${isOpen ? "open" : ""}`}
        onClick={onClose} // Close when clicking outside the content
      >
        <div
          className="off-canvas-content"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Search Input */}
          <div className="off-canvas-search">
            <input
              type="text"
              placeholder="Search for product"
              className="search-input"
            />
            <button className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* Buttons for Menu and Categories */}
          <div className="off-canvas-buttons">
            <button
              className={`tab-btn ${activeTab === "menu" ? "active" : ""}`}
              onClick={() => setActiveTab("menu")}
            >
              Menu
            </button>
            <button
              className={`tab-btn ${activeTab === "categories" ? "active" : ""}`}
              onClick={() => setActiveTab("categories")}
            >
              Categories
            </button>
          </div>

          {/* Links Section */}
          <ul className="off-canvas-links">
            {linksToDisplay.map((link, index) => (
              <li key={index}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
