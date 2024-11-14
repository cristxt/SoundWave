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
        <a href="#" className="social-media">
          <img src="src/assets/twitter.svg" className="social-icon" />
          <span>Twitter</span>
        </a>
       
      </div>
    </footer>
  );
};

export default Footer;
