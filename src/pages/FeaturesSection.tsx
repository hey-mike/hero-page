import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <h2>Our Features</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="feature-item">
              <i className="fas fa-star"></i>
              <h3>Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          {/* Add more feature items */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;