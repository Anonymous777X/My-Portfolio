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
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="currentColor"/>
              <path d="M10 8L22 8C23.1046 8 24 8.89543 24 10L24 22C24 23.1046 23.1046 24 22 24L10 24C8.89543 24 8 23.1046 8 22L8 10C8 8.89543 8.89543 8 10 8Z" stroke="white" strokeWidth="2"/>
              <path d="M16 10V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 16H22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
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
              <span>Sahilpatyal522@gmail.com</span>
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
