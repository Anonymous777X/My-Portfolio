// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <div className="footer-logo">
          <svg width="30" height="30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="#3498db" rx="20"/>
        <text x="50%" y="50%" font-size="100" font-family="Arial, sans-serif" fill="white" font-weight="bold" text-anchor="middle" dominant-baseline="middle">SP</text>
    </svg>
            Portfolio
          </div>
          <p className="footer-text">
            A creative developer focused on building exceptional digital experiences
            that are fast, accessible, visually appealing, and responsive.
          </p>
          
          <div className="footer-contact">
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaMapMarkerAlt />
              </div>
              <span>Kangra, Himachal Pradesh</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaPhone />
              </div>
              <span>+91 7876298387</span>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaEnvelope />
              </div>
              <span>Sahilpatial522@gmail.com</span>
            </div>
          </div>
          
          <div className="footer-social">
            <motion.a 
              href="https://github.com/Anonymous777X" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/sahilpatyal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="linkedin"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/sahil_ptyal/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/sahil.patial.566" 
              target="_blank" 
              rel="noopener noreferrer"
              className="facebook"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            >
              <FaFacebook />
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Sahil Patyal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
