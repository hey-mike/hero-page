import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-item">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae mauris in eros maximus varius."</p>
              <div className="testimonial-author">
                <img src="./johndoe.png" alt="Author 1" className="img-fluid" />
                <h4>John Doe</h4>
                <p>CEO, Company Name</p>
              </div>
            </div>
          </div>
          {/* Add more testimonial items */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;