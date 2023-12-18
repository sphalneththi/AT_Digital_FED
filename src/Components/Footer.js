import React from 'react';
import Logo from "../Assets/Logo.png";

const Footer = () => {
  return (
    <div className="Footer">

    <div className='horizontal-content'>
    
        <div className="logo-and-text">  
            <img src={Logo} alt="Company Logo" className="footer-logo" />
            <p className="footer-text">
                Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.
            </p>
        </div>

        <div className="footer-technologies">
        <ul className="footer-list">
          <li className='list-title'>Our Technologies</li>
          <li>ReactJS</li>
          <li>Gatsby</li>
          <li>NextJS</li>
          <li>NodeJS</li>
          <li>GraphQL</li>
          <li>Laravel</li>
        </ul>
        </div>

        <div className="footer-services">
        <ul className="footer-list">
          <li className='list-title'>Our Services</li>
          <li>Social Media Marketing</li>
          <li>Web & Mobile App Development</li>
          <li>Data & Analytics</li>
          <li>Google Marketing Solutions</li>
          <li>Search Engine Optimization</li>
        </ul>
        </div>
    </div>
        <div className="footer-line"></div>
        <p className='privacy-text' style={{ textAlign: 'center' }}>Privacy Policy | Terms & Conditions</p>
    </div>
  );
};

export default Footer;
