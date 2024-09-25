import React from 'react';
import '../AboutSection.css';
//import image1 from './assets/image.svg';
//import image2 from './assets/image-2.svg';

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
        {/*<img src={image1} alt="Little Lemon" className="image" />
        <img src={image2} alt="Little Lemon" className="image" />*/}
      </div>
    </div>
  );
}

export default AboutSection;
