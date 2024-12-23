import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-row">
      <div
        className="main-about-us-row"
      >
        {/* First Column */}
        <div className="about-us-column" >
          <div className="about-title"> 
            SOME WORDS ABOUT US
          </div>
          <h4 className="about-description">Well-coordinated teamwork speaks About Us</h4>
        </div>

        {/* Second Column */}
        <div className="about-us-column" >
          <h4>We love what we do</h4>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <a href="#" >
            Read more
          </a>
        </div>

        {/* Third Column */}
        <div className="about-us-column" >
          <h4>Our working process</h4>
          <p>
            She packed her seven versalia, put her initial into the belt and
            made herself on the way.
          </p>
          <a href="#" >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
