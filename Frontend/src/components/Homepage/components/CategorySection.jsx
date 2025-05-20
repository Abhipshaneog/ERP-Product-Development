import React, { useState } from "react";
import "./CategorySection.css";
import {
  FaMobileAlt,
  FaDesktop,
  FaClock,
  FaCamera,
  FaHeadphones,
  FaGamepad,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const categories = [
  { label: "Phones", icon: <FaMobileAlt /> },
  { label: "Computers", icon: <FaDesktop /> },
  { label: "SmartWatch", icon: <FaClock /> },
  { label: "Camera", icon: <FaCamera /> },
  { label: "HeadPhones", icon: <FaHeadphones /> },
  { label: "Gaming", icon: <FaGamepad /> },
];

const CategorySlider = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Camera as default

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="category-slider">
      <div>
        <h2>Shop by Category</h2>
      </div>
      <div>
        <div className="categories1234">
          <button className="arrow-btn">
            <FaChevronLeft />
          </button>

          <div className="category-list">
            {categories.slice(0, 5).map((category, index) => (
              <div
                key={category.label}
                className={`category-card ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleSelect(index)}
              >
                <div className="icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            ))}
          </div>

          <button className="arrow-btn">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
