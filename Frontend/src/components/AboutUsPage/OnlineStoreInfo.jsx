import React from 'react';
import './OnlineStoreInfo.css';
const OnlineStoreInfo = () => {
  return (
    <div className="online-store-container">
      <div className="store-row">
        {/* First Column: Image */}
        <div className="store-image-column">
          <img
            src="https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-us1-img-1-opt.jpg.webp"
            alt="Online Store"
            className="store-image"
          />
        </div>

        {/* Second Column: Text Details */}
        <div className="store-details-column">
          <div>
            <div className="design-intro">
              <p>SEEMINGLY ELEGANT DESIGN</p>
            </div>
            <h4 className="store-title">About our online store</h4>
            <em className="store-intro">
              Risus suspendisse a orci penatibus a felis suscipit consectetur vestibulum
              sodales dui cum ultricies lacus interdum.
            </em>
            <p className="store-description">
              One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed
              in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his
              head a little he could see his brown belly, slightly domed and divided by arches into
              stiff.
            </p>
            <p className="store-extra-info">
              Dictumst per ante cras suscipit nascetur ullamcorper in nullam fermentum condimentum
              torquent iaculis reden posuere potenti viverra condimentum dictumst id tellus suspendisse
              convallis condimentum.
            </p>
            <hr />
            {/* Footer Row */}
            <div className="store-footer-row">
              <div className="store-footer-text">
                <em>Developed by Xtemos Studio @ 2024</em>
              </div>

              {/* Logo with Social Media Icons */}
              <div className="store-social-icons">
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineStoreInfo;
