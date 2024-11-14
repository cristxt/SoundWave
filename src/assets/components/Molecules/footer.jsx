import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="#" className="footer-link">About Us</a>
        <a href="#" className="footer-link">Contact</a>
      </div>
      <div className="footer-right">
        <a href="#" className="social-link">
          <img src="src/assets/twitter.svg" alt="Twitter" className="social-icon" />
          <span>Twitter</span>
        </a>
        <a href="#" className="social-link">
          <img src="src/assets/twitter.svg" alt="Facebook" className="social-icon" />
          <span>Facebook</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
