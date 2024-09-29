import React from 'react';
import '../TestimonialsSection.css';
import starImage from '../assets/Stars.svg';
import heroImage from '../assets/Test-persona 1.jpg';
import heroImage2 from '../assets/Test-persona 2.jpg';
import heroImage3 from '../assets/Test-persona 3.jpg';
import heroImage4 from '../assets/Test-persona 4.jpg';

const testimonials = [
  {
    quote: '“Delicious pasta and a cozy atmosphere!”',
    name: 'Jake B.',
    stars: starImage,
    image: heroImage,
  },
  {
    quote: '“Authentic flavors and great service.”',
    name: 'Emily W.',
    stars: starImage,
    image: heroImage2,
  },
  {
    quote: '“Charming place with a fantastic wine selection”',
    name: 'Brad P.',
    stars: starImage,
    image: heroImage3,
  },
  {
    quote: '“Friendly staff, and mouthwatering risotto.”',
    name: 'Ayesha S.',
    stars: starImage,
    image: heroImage4,
  },
];

function TestimonialsSection() {
  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">Testimonials</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-rating">
              <span>Rating</span>
              <img src={testimonial.stars} alt="Star rating" />
            </div>
            <div class="testimonial-header">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
              <div className="testimonial-name">{testimonial.name}</div>
              </div>
            <div className="testimonial-quote">{testimonial.quote}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
