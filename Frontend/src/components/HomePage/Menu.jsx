import React, { useState, useEffect } from "react";
import "./Menu.css";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import OffCanvas from "./OffCanvas";

const Menu = () => {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSearch = () => {
    console.log("Search Text: ", searchText);
    console.log("Selected Category: ", category);
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const menuElement = document.querySelector(".menu-container");
      if (menuElement) {
        setIsScrolled(window.scrollY > menuElement.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`menu-container ${isScrolled ? "scrolled" : ""}`}>
      <OffCanvas
        isOpen={isOffCanvasOpen}
        onClose={() => setIsOffCanvasOpen(false)}
      />
      <div className="menu-main-content">
        {/* Hamburger Menu */}
        <div
          className="hamburger-menu"
          onClick={() => setIsOffCanvasOpen(true)}
        >
          <i className="fa fa-bars"></i>
        </div>

        {/* Logo Section */}
        <div className="logo-container">
          <img
            src="https://woodmart.b-cdn.net/wp-content/themes/woodmart/images/wood-logo-dark.svg"
            alt="logo"
          />
        </div>

        {/* Search Bar Section */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for products"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div
            className="custom-dropdown"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="dropdown-selected">{category} </div>
            <FaCaretDown />
            {dropdownOpen && (
              <ul className="dropdown-options">
                <li onClick={() => handleCategorySelect("All Categories")}>
                  All Categories
                </li>
                <li onClick={() => handleCategorySelect("Electronics")}>
                  Electronics
                </li>
                <li onClick={() => handleCategorySelect("Fashion")}>
                  Fashion
                </li>
                <li onClick={() => handleCategorySelect("Home")}>Home</li>
                <li onClick={() => handleCategorySelect("Beauty")}>Beauty</li>
              </ul>
            )}
          </div>
          <button className="search-btn" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>

        {/* Login/Register Section */}
        <div className="auth-container">
          <a className="auth-btn">LOGIN / REGISTER</a>
        </div>

        {/* Icons Section */}
        <div className="icons-container">
          <div className="icon-wrapper">
            <i className="fa-solid fa-shuffle"></i>
            <span className="badge">0</span>
          </div>
        </div>
        <div className="cart">
          <div className="icon-wrapper">
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="badge">0</span>
          </div>
          <p className="cart-price">$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
