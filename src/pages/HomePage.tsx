import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from './HeroBanner';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import CallToAction from './CallToAction';

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      
      <section className="intro-section">
        <div className="container">
          <h2>Welcome to Our Website</h2>
          <p>We provide exceptional services to meet your needs.</p>
          <Link to="/services" className="btn btn-primary">Explore Services</Link>
        </div>
      </section>
      
      <FeaturesSection />
      
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>Learn more about our company and our mission.</p>
              <Link to="/about" className="btn btn-secondary">Read More</Link>
            </div>
            <div className="col-md-6">
              <img src="/aboutus.png" alt="About Us" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
      
      <section className="blog-section">
        <div className="container">
          <h2>Latest Blog Posts</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="blog1.png" alt="Blog Post 1" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Blog Post 1</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Link to="/blog/post-1" className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
            {/* Add more blog post cards */}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default HomePage;