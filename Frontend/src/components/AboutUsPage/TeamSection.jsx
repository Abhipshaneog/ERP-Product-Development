import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      image: 'https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-us1-per-1-opt-1.jpg.webp',
      name: 'Mark Jance',
      role: 'CEO / FOUNDER',
      socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      image: 'https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-us1-per-2-opt-1.jpg.webp',
      name: 'Aviana Plummer',
      role: 'CEO / FOUNDER',
      socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      image: 'https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-us1-per-3-opt-1.jpg.webp',
      name: 'Braydon Wilkerson',
      role: 'CEO / FOUNDER',
      socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      image: 'https://woodmart.b-cdn.net/wp-content/uploads/2021/03/w-about-us1-per-4-opt-1.jpg.webp',
      name: 'Kristin Watson',
      role: 'CEO / FOUNDER',
      socials: {
        facebook: '#',
        instagram: '#',
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <div className="team-section">
    <div className="team-section-main">
      {/* First Row */}
      <div className="team-section-header">
        <div className="words-about-us">WORDS ABOUT US</div>
        <h4 className="team-title">Our Team</h4>
        <div className="team-description">
          Convallis ullamcorper aliquet ultrices orci cum vestibulum lobortis erat.
        </div>
      </div>

      {/* Second Row */}
      <div className="team-member-row">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <img src={member.image} alt={member.name} className="team-member-image" />
            <div className="team-member-body">
              <h4 className="team-member-name">{member.name}</h4>
              <div className="team-member-role">{member.role}</div>
              <div className="social-icons-team">
                <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TeamSection;
