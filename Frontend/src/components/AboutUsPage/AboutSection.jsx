import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const gridData = [
    { year: "2012", label: "FOUNDING YEAR" },
    { year: "2014", label: "MILESTONE ACHIEVED" },
    { year: "2016", label: "EXPANSION STARTED" },
    { year: "2018", label: "AWARDS WON" },
    { year: "2020", label: "GLOBAL PRESENCE" },
    { year: "2022", label: "ONGOING SUCCESS" },
  ];

  return (
    <div className="about-section">
    <div className="about-section-main">
      <div className="about-content">
        {/* First Column */}
        <div className="about-text">
          <div className="developer-text">DEVELOPED BY XTEMOS STUDIO @ 2022.</div>
          <h4 className="about-title">We work through every aspect at the planning</h4>
          <a href="#!" className="about-link">We do it for you with love</a>
        </div>

        {/* Second Column */}
        <div className="about-grid">
          <div className="grid-container">
            {gridData.map((item, index) => (
              <div className="grid-item" key={index}>
                <div className="grid-year">{item.year}</div>
                <div className="grid-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutSection;
