import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        {/* First Video */}
        <div className="video-card">
          <a href="https://www.youtube.com/watch?v=company-history-video-id" target="_blank" rel="noopener noreferrer" className="video-link">
            <div className="video-thumbnail">
              <img src="https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-us1-img-1-opt.jpg.webp" alt="Company History Thumbnail" className="video-thumbnail-img" />
            </div>
          </a>
          <div className="video-info">
            <h4 className="video-title">Our company history and facts</h4>
            <em className="video-description">
              I should be incapable of drawing a single stroke at the present moment; and yet I
              feel that I never was a greater artist than now.
            </em>
          </div>
        </div>

        {/* Second Video */}
        <div className="video-card">
          <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" target="_blank" rel="noopener noreferrer" className="video-link">
            <div className="video-thumbnail">
              <img src="https://images.ctfassets.net/pdf29us7flmy/5m2fwccqUUiiss0BEKWyp4/92d6506a34e10b897b42438db9383c1d/GettyImages-875599880-optimized.png?w=640&q=100&fm=jpg" alt="Design & Development Process Thumbnail" className="video-thumbnail-img" />
            </div>
          </a>
          <div className="video-info">
            <h4 className="video-title">Design & development process demonstration</h4>
            <em className="video-description">
              A wonderful serenity has taken possession of my entire soul, like these sweet
              mornings of spring which I enjoy with my whole heart.
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
