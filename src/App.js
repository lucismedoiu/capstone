import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import HeroSection from './components/HeroSection.js';
import HighlightSection from './components/HighlightsSection.js';
import TestimonialsSection from './components/TestimonialSection.js';
import AboutSection from './components/AboutSection.js';
import Footer from './components/Footer.js';
import FooterTwo from './components/FooterTwo.js'
import Main from './components/Main.js'
import ConfirmedBooking from './components/ConfirmedBooking.js';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={[
              <HeroSection />,
              <HighlightSection />,
              <TestimonialsSection />,
              <AboutSection />,
              <Footer />
            ]} />
        <Route path='/booking' element={[<Main />, <FooterTwo />]} />
        <Route path='/confirmed' element={[<ConfirmedBooking />,<FooterTwo />]} />
      </Routes>
    </Router>
  );
}

export default App;

