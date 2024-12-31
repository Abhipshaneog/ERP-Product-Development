import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="main-footer-container">
        {/* First Row - Brand Logos */}
        <div className="footer-row">
          <div className="brand-logo-container">
            {/* <img
              src="https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-PackIt.png"
              alt="Brand 1"
              className="brand-logo"
            /> */}
            <img
              src="https://woodmart.b-cdn.net/wp-content/uploads/2017/01/nichemodern.png"
              alt="Brand 2"
              className="brand-logo"
            />
            <img
              src="https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-witra.png"
              alt="Brand 4"
              className="brand-logo"
            />
            <img
              src="https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-Rosenthal.png.webp"
              alt="Brand 3"
              className="brand-logo"
            />

            <img
              src="https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-Magisso.png"
              alt="Brand 4"
              className="brand-logo"
            />
            {/* <img
              src="https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-Louis-Poulsen.png.webp"
              alt="Brand 4"
              className="brand-logo"
            /> */}
          </div>
        </div>

        {/* Second Row - Footer Content */}
        <div className="footer-row footer-info">
          <div className="footer-row-wrap">
            <div className="footer-column">
              <div className="footer-logo">
                <img
                  src="https://woodmart.b-cdn.net/wp-content/themes/woodmart/images/wood-logo-dark.svg"
                  alt="Woodmart Logo"
                  className="footer-logo-img"
                />
              </div>
              <p className="footer-description">
                Condimentum adipiscing vel neque dis nam parturient orci at
                scelerisque neque dis nam parturient.
              </p>
              <p>
                <FaMapMarkerAlt className="footer-icon" /> 451 Wall Street, UK,
                London
              </p>
              <p>
                <FaPhoneAlt className="footer-icon" /> Phone: (064) 332-1233
              </p>
              <p>
                <FaFax className="footer-icon" /> Fax: (099) 453-135
              </p>
            </div>

            <div className="footer-column">
              <h3>RECENT POSTS</h3>
              <div className="recent-post">
                <img
                  src="https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-12-75x65.jpg"
                  alt="Post Thumbnail"
                  className="post-thumbnail"
                />
                <div className="post-content">
                  <p>A companion for extra sleeping</p>
                  <p>
                    July 23, 2016 <span>1 Comment</span>
                  </p>
                </div>
              </div>
              <div className="recent-post">
                <img
                  src="https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-11-75x65.jpg"
                  alt="Post Thumbnail"
                  className="post-thumbnail"
                />
                <div className="post-content">
                  <p>Outdoor seating collection inspiration</p>
                  <p>July 23, 2016 1 Comment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-row-wrap">
            <div className="footer-column">
              <h3>OUR STORES</h3>
              <ul>
                <li>New York</li>
                <li>London SF</li>
                <li>Edinburgh</li>
                <li>Los Angeles</li>
                <li>Chicago</li>
                <li>Las Vegas</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>USEFUL LINKS</h3>
              <ul>
                <li>Privacy Policy</li>
                <li>Returns</li>
                <li>Terms & Conditions</li>
                <li>Contact Us</li>
                <li>Latest News</li>
                <li>Our Sitemap</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>FOOTER MENU</h3>
              <ul>
                <li>Instagram profile</li>
                <li>New Collection</li>
                <li>Woman Dress</li>
                <li>Contact Us</li>
                <li>Latest News</li>
                <li>Purchase Theme </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Third Row - Copyright Text and Image */}
        <div className="footer-row footer-bottom">
          <p className="footer-text">
            <strong>WOODMART</strong>© 2024 CREATED BY{" "}
            <strong>
              <span>X</span>TEMOS STUDIO.
            </strong>{" "}
            PREMIUM E-COMMERCE SOLUTIONS.
          </p>

          <img
            src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/01/payments.png"
            alt="Secure Logo"
            className="footer-bottom-image"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
