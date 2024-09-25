import React from 'react';
import '../HeroSection.css';
import heroImage from '../assets/restauranfood.jpg';


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <div className="hero-image-wrapper">
        <img className="hero-image" src={heroImage} alt="Restaurant Food" />
      </div>
    </div>
  );
}

export default HeroSection;