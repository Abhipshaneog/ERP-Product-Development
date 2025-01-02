import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="contact-info-container-main">
        <div className="contact-info-row">
          <div className="contact-details-column">
            <h2 className="contact-heading">Get in Touch</h2>
            <div className="contact-location">
              <h2 className="location-details">
                UK
                <br />
                Technology Drive, Rugby
                <br />
                CV211FB, United Kingdom
                <br />
                +44-1788-331113
              </h2>
              <h2 className="location-details">
                Denmark
                <br />
                Søndervangen 47, 2 th Viby
                <br />
                8260 Aarhus, Denmark
                <br />
                +45-41208194
              </h2>
            </div>
            <h2 className="location-heading">India</h2>
            <div className="contact-location">
              <h2 className="location-details">
                Bengaluru
                <br />
                AECS B Block, Wellington Paradise,
                <br />
                Begur, Singasandra, Bengaluru,
                <br />
                Karnataka 560068, India
                <br />
                +91-8040125110
              </h2>
              <h2 className="location-details">
                Silchar
                <br />
                College Road,
                <br />
                Silchar-788004
                <br />
                +91-3842351516
              </h2>
            </div>
          </div>

          <div className="additional-info-column">
            <img
              src="https://galvinus.com/wp-content/uploads/2023/09/Vector-map1.png"
              alt="Contact"
              className="contact-image"
            />
            <div className="additional-info">
              <h2 className="info-heading">
                Sales
                <br />
                Our dynamic sales team is
                <br />
                here for consultation.
                <br />
                info@galvinus.com
              </h2>
              <h2 className="info-heading">
                Support
                <br />
                Our dynamic support team is
                <br />
                here to help.
                <br />
                contact@galvinus.com
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
