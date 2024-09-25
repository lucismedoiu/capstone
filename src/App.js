import React from 'react';
import NavBar from './components/NavBar.js';
import HeroSection from './components/HeroSection.js';
import HighlightSection from './components/HighlightsSection.js';
//import TestimonialsSection from './components/TestimonialSection.js';
//import AboutSection from './components/AboutSection.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <HighlightSection />
      <Footer />
    </>
  );
}

export default App;

