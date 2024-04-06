import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <video autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/20233744/20233744-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Welcome to My Website</h1>
        <p>Discover amazing things here.</p>
        <Link to="/learn-more" className="btn btn-primary">Learn More</Link>
      </div>
    </div>
  );
};

export default HeroBanner;