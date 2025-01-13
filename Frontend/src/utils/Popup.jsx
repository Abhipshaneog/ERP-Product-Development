import React from "react";
import "./Popup.css"; // Add styles for the popup here

const Popup = ({ message, type, onClose }) => {
  return (
    <div className={`popup-container ${type}`}>
      <div className="popup-message">
        <p>{message}</p>
        <button className="popup-close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

export default Popup;
