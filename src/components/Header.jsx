import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="currentColor"/>
            <path d="M10 8L22 8C23.1046 8 24 8.89543 24 10L24 22C24 23.1046 23.1046 24 22 24L10 24C8.89543 24 8 23.1046 8 22L8 10C8 8.89543 8.89543 8 10 8Z" stroke="white" strokeWidth="2"/>
            <path d="M16 10V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 16H22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Portfolio
        </motion.div>

        <div className="nav-container">
          <nav className="nav-links">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {item}
              </motion.a>
            ))}
            <ThemeToggle />
          </nav>

          <div className="mobile-controls">
            <ThemeToggle />
            <button className="mobile-nav-toggle" onClick={toggleMobileMenu}>
              <FaBars />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <button className="mobile-menu-close" onClick={toggleMobileMenu}>
              <FaTimes />
            </button>
            <div className="mobile-nav-links">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  onClick={toggleMobileMenu}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
