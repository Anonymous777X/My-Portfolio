import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader"></div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Loading...
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '300px' }}
        transition={{ delay: 0.5, duration: 2 }}
        style={{
          height: '4px',
          background: 'var(--gradient-primary)',
          borderRadius: '2px',
          marginTop: '1rem',
        }}
      ></motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 