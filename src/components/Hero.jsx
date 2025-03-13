import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </motion.div>
      
      <div className="container">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm <span className="highlighted-text"> <br/> Sahil Patyal</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Full Stack Developer & Designer</h2>
            <p>
              I create beautiful, functional, and responsive websites and applications.
              With a passion for clean code and user-friendly interfaces, I deliver
              exceptional digital experiences.
            </p>
          </motion.div>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#contact" className="btn">Get in Touch</a>
            <a href="#projects" className="btn outlined-btn">View My Work</a>
          </motion.div>
          
          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a 
              href="mailto:your-email@example.com" 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-image">
            <img 
              src="/profile.jpg" 
              alt="Developer Profile" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://res.cloudinary.com/davovg4nm/image/upload/f_auto,q_auto/v1/my%20photos/t7ilxu0wnayprdajedtq";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 