import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://twitter.com" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://instagram.com" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>

        <p className="footer-text">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
