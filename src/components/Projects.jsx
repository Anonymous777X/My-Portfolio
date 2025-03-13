// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'WanderVerse- New ways to Explore',
      image: 'https://res.cloudinary.com/davovg4nm/image/upload/f_auto,q_auto/lvzewpte2sxdqfahqw52',
      description: 'A full-stack Airbnb-inspired platform built with the MERN stack, using EJS for dynamic templating instead of React.',
      tags: ['Express', 'Node.js', 'MongoDB', 'EJS','HTML&CSS'],
      liveLink: 'https://wanderlust-9prv.onrender.com/listings',
      githubLink: 'https://github.com/Anonymous777X'
    },
    {
      title: 'Weather Application',
      image: 'https://res.cloudinary.com/davovg4nm/image/upload/f_auto,q_auto/dpdtx5j9avtv5jwansiy',
      description: ' A React-based weather application featuring Material UI for styling and React Router for seamless navigation.',
      tags: ['React', 'React-Router', 'Material-UI'],
      liveLink: 'https://himyweather.netlify.app/',
      githubLink: 'https://github.com/Anonymous777X'
    },
    {
      title: 'Spotify Clone',
      image: 'https://as1.ftcdn.net/jpg/02/80/25/16/1000_F_280251625_S73jfCfb7btjIhSNfTWcL76vuegFxvOG.webp',
      description: ' A frontend-only replica of Spotify, designed with HTML and CSS to mimic the original interface.',
      tags: ['HTML', 'CSS'],
      liveLink: 'Not Live',
      githubLink: 'https://github.com/Anonymous777X'
    },
    {
      title: 'Jarvis AI Assistant',
      image: 'https://wallpapercave.com/wp/wp1913251.jpg',
      description: ' A Python-powered virtual assistant for Linux and Windows, integrated with various libraries for enhanced functionality.',
      tags: ['Python', 'ttsx3', 'pywhatkit', 'pyjokes'],
      liveLink: 'Not live yet',
      githubLink: 'https://github.com/Anonymous777X'
    },



  ];

  return (
    <section id="projects" className="projects">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="project-tag" key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
