import React from 'react';
import '../Footer.css';
import logo from '../assets/Footer Logo.svg';
import socialIcon1 from '../assets/Insta Logo.svg';
import socialIcon2 from '../assets/facebook logo.svg';
import socialIcon3 from '../assets/twitter logo.svg';

function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img src={logo} alt="Little Lemon Logo" />
      </div>
      <div className="navigation-section">
        <h3 className="header">Doormat Navigation</h3>
              <p className="text">Home</p>
              <p className="text">About</p>
              <p className="text">Menu</p>
              <p className="text">Reservations</p>
              <p className="text">Order Online</p>
              <p className="text">Login</p>
      </div>
      <div className="contact-section">
        <h3 className="header">Contact</h3>
        <p className="text">Address: 1234 W Madison St, Chicago, IL 60607</p>
        <p className="text">Phone Number: (312) 555-7890</p>
        <p className="text">Email: LittleLemon@outlook.com</p>
      </div>
      <div className="social-media-section">
        <h3 className="header">Social Media</h3>
        <p className="text">
          <img src={socialIcon1} alt="Instagram Icon" /> little.lemon
        </p>
        <p className="text">
          <img src={socialIcon2} alt="Facebook Icon" />
           Little Lemon Restaurant
        </p>
        <p className="text">
          <img src={socialIcon3} alt="Twitter Icon" />
          Little Lemon
        </p>
      </div>
    </div>
  );
}

export default Footer;
