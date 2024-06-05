import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div>© 2024 Las Sexpeares. All rights reserved.</div>
      <div className="footer-icons">
        <div className="footer-icon">
          <a href="https://www.facebook.com/lassexpeares/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
        <div className="footer-icon">
          <a href="https://x.com/lassexpeares" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <div className="footer-icon">
          <a href="https://www.instagram.com/lassexpeares/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div className="footer-icon">
          <a href="hhttps://www.tiktok.com/@lassexpeares" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
