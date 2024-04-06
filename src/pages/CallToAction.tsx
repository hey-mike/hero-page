import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Get Started?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </div>
    </section>
  );
};

export default CallToAction;