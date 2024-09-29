import React from 'react';
import '../AboutSection.css'
import image1 from '../assets/Mario and Adrian A.jpg';
import image2 from '../assets/Mario and Adrian b.jpg';

function AboutSection() {
  return (
    <div className="about-container">
      <div className="text-container">
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className="image-container">
        <img src={image1} alt="Little Lemon" className="image1" />
        <img src={image2} alt="Little Lemon" className="image2" />
      </div>
    </div>
  );
}

export default AboutSection;
