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
      title: 'E-Commerce Platform',
      image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      title: 'Task Management App',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
      description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking.',
      tags: ['React', 'Firebase', 'Material UI', 'Redux'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      title: 'Fitness Tracking Dashboard',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'A dashboard for tracking fitness metrics with data visualization, goal setting, and progress analytics.',
      tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      title: 'Weather Application',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
      description: 'A weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.',
      tags: ['JavaScript', 'Weather API', 'Chart.js', 'Geolocation'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      title: 'Recipe Sharing Platform',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=926&q=80',
      description: 'A community-driven platform for sharing recipes, with search functionality, ratings, and user profiles.',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      title: 'Travel Blog',
      image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'A travel blog with location tagging, photo galleries, and interactive maps showcasing travel experiences.',
      tags: ['React', 'GraphQL', 'Mapbox', 'Cloudinary'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com'
    }
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
                    <FaGithub /> Source Code
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
