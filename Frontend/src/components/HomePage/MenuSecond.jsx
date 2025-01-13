import React, { useState } from "react";
import "./MenuSecond.css";
import { FaBars, FaCaretDown } from "react-icons/fa";

const NewMenu = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("BROWSE CATEGORIES");
  const [openDropdown, setOpenDropdown] = useState(null); 

  const handleHamburgerClick = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };


  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown); 
  };

  const handleMouseLeave = () => {
    if (openDropdown !== "categories") {
      setOpenDropdown(null);
    }
  };

  return (
    <div className="menu--container">
      <div className="second-menu-container">
        {/* Browse Categories and Hamburger Menu */}
        <div className="browse-categories-container">
          <button className="hamburger--menu" onClick={handleHamburgerClick}>
            <FaBars />
          </button>
          <div className="custom-dropdown">
            <button
              onClick={() => toggleDropdown("categories")}
              onMouseEnter={() => handleMouseEnter("categories")} // Open on hover
              onMouseLeave={handleMouseLeave} // Close when mouse leaves
            >
              {selectedCategory} <FaCaretDown />
            </button>
            {openDropdown === "categories" && (
              <ul className="dropdown-options">
                <li onClick={() => handleCategoryChange("Furniture")}>
                  <i className="fa-solid fa-chair"></i>
                  <span>Furniture</span>
                </li>
                <li onClick={() => handleCategoryChange("Cooking")}>
                  <i className="fa-solid fa-utensils"></i>
                  <span>Cooking</span>
                </li>
                <li onClick={() => handleCategoryChange("Accessories")}>
                  <i className="fa-regular fa-keyboard"></i>
                  <span>Accessories</span>
                </li>
                <li onClick={() => handleCategoryChange("Fashion")}>
                  <i className="fa-solid fa-shirt"></i>
                  <span>Fashion</span>
                </li>
                <li onClick={() => handleCategoryChange("Clocks")}>
                  <i className="fa-regular fa-clock"></i>
                  <span>Clocks</span>
                </li>
                <li onClick={() => handleCategoryChange("Lighting")}>
                  <i className="fa-solid fa-bolt"></i>
                  <span>Lighting</span>
                </li>
                <li onClick={() => handleCategoryChange("Toys")}>
                  <i className="fa-solid fa-gamepad"></i>
                  <span>Toys</span>
                </li>
                <li onClick={() => handleCategoryChange("Hand Made")}>
                  <i className="fa-solid fa-wand-magic"></i>
                  <span>Hand Made</span>
                </li>
                <li onClick={() => handleCategoryChange("Electronics")}>
                  <i className="fa-solid fa-laptop-medical"></i>
                  <span>Electronics</span>
                </li>
                <li onClick={() => handleCategoryChange("Car")}>
                  <i className="fa-solid fa-car"></i>
                  <span>Car</span>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Separate Custom Dropdowns for Home, Shops, Blog, Pages, Elements */}
        <div className="dropdowns-container">
          {["HOME", "SHOPS", "BLOG"].map((item) => (
            <div
              className="dropdown-item"
              key={item}
              onMouseEnter={() => handleMouseEnter(item)} // Open on hover
              onMouseLeave={handleMouseLeave} // Close when mouse leaves
            >
              <div className="custom-dropdown">
                <button onClick={() => toggleDropdown(item)}>
                  {item} 
                </button>
                {openDropdown === item && (<></>
                  // <ul className="dropdown-options">
                  //   <li>{item} Option 1</li>
                  //   <li>{item} Option 2</li>
                  //   <li>{item} Option 3</li>
                  // </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer and Purchase Theme Button */}
        <div className="offer-container">
          <span className="special-offer-text">SPECIAL OFFER</span>
          <span> | </span>
          <button className="purchase-btn">PURCHASE THEME</button>
        </div>
      </div>
    </div>
  );
};

export default NewMenu;
