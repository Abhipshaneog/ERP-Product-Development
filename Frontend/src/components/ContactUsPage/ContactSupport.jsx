import React from "react";
import "./ContactSupport.css";

const ContactSupport = () => {
  return (
    <div className="contact-support-container">
      <div className="contact-support-row">
        <div className="support-text-column">
          <h2 className="support-heading">We're here to support you.<br/> Reach out!</h2>
          <p className="support-paragraph">You can write to us at <b>contact@galvinus.com</b></p>
        </div>

        <div className="support-form-column">
          <h2 className="form-heading">
            Please Provide us your Information. We're here to help!
          </h2>
          <div className="form-grid">
            <input type="text" placeholder="Name*" className="grid-input" />
            <select className="grid-select">
              <option value="">Select Country*</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
            </select>
            <input type="email" placeholder="Email*" className="grid-input" />
            <input type="text" placeholder="Phone number" className="grid-input" />
            <input type="text" placeholder="Company name" className="grid-input" />
            <select className="grid-select">
              <option value="">Select Service</option>
              <option value="Service1">Service 1</option>
              <option value="Service2">Service 2</option>
            </select>
          </div>
          <textarea
            className="form-textarea"
            placeholder="Message"
          ></textarea>
          <div className="communication-preference">
            How do you want to be communicated?*
          </div>
          <div className="contact-methods">
            <label>
              <input type="checkbox" value="email" /> Email
            </label>
            <label>
              <input type="checkbox" value="phone" /> Phone
            </label>
          </div>
          <div className="terms-container">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
            I have read and accepted the Terms and Conditions*
            </label>
          </div>
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
