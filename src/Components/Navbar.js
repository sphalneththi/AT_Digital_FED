import React, { useState } from 'react';
import Logo from "../Assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <img src={Logo} alt="Company Logo" className="nav-logo" />
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="/services">SERVICES</a>
            <a href="/about">ABOUT US</a>
            <a href="/contact">CONTACT US</a>
            <a href="/careers">CAREERS</a>
      </div>
      <div className="menu-button" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
