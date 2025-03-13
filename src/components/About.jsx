// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: '6', title: 'Months Training Experience' },
    { number: '4+', title: 'Projects Completed' },
    { number: '7+', title: 'Technologies learned' },
  ];

  return (
    <section id="about" className="about">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <p>
          Hello! I'm a passionate MERN stack developer with a keen eye for design and a love for crafting
           intuitive, dynamic user experiences. With expertise in both front-end and back-end 
           development, I take a holistic approach to building robust, scalable applications.
          </p>
          <p>
          My journey in web development has been driven by hands-on experience and continuous 
          learning. Over the past six months of dedicated MERN stack training, I've worked on 
          creating responsive websites, interactive applications, and efficient back-end solutions.
          I enjoy tackling challenges, optimizing performance, and delivering seamless user experiences.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or enjoying outdoor activities to recharge my creative energy.
          </p>
          
          <motion.div 
            className="stats"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                className="stat-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 + (index * 0.2) }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-title">{stat.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
