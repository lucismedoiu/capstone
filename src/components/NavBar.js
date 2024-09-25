import React, { useState } from 'react';
import '../NavBar.css';
import logo from '../assets/Logos/BaseLogo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open state
  };

  return (
    <nav className="nav-bar">
      <img src={logo} alt="Little Lemon" className="logo" />
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>RESERVATIONS</li>
        <li>ORDER ONLINE</li>
        <li>LOGIN</li>
      </ul>
    </nav>
  );
};

export default NavBar;
