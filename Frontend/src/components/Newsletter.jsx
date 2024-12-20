import React from "react";
import "./Newsletter.css"; 

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="main-newsletter-container">
        <h4 className="newsletter-title">JOIN OUR NEWSLETTER NOW</h4>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            className="email-input"
          />
          <button className="signup-btn">Sign Up</button>
        </div>
        <p className="privacy-policy">
          Will be used in accordance with our <span>Privacy Policy</span> 
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
