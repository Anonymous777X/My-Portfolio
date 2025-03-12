import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNode, 
  FaDatabase,
  FaMobile,
  FaServer,
  FaPalette
} from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: <FaHtml5 />,
      title: 'HTML5',
      description: 'Semantic markup, accessibility, and modern HTML features'
    },
    {
      icon: <FaCss3Alt />,
      title: 'CSS3',
      description: 'Flexbox, Grid, animations, responsive design, and CSS variables'
    },
    {
      icon: <FaJs />,
      title: 'JavaScript',
      description: 'ES6+, async/await, DOM manipulation, and functional programming'
    },
    {
      icon: <FaReact />,
      title: 'React',
      description: 'Hooks, context API, state management, and custom components'
    },
    {
      icon: <FaNode />,
      title: 'Node.js',
      description: 'Express, REST APIs, authentication, and middleware'
    },
    {
      icon: <FaDatabase />,
      title: 'Databases',
      description: 'MongoDB, MySQL, PostgreSQL, and data modeling'
    },
    {
      icon: <FaMobile />,
      title: 'Responsive Design',
      description: 'Mobile-first approach, media queries, and adaptive layouts'
    },
    {
      icon: <FaServer />,
      title: 'DevOps',
      description: 'Git, CI/CD, deployment strategies, and cloud services'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'User-centered design, wireframing, prototyping, and Figma'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div
          className="skills-content"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I've worked with a variety of technologies and frameworks in the web development ecosystem.
            Here are some of the key skills and technologies I specialize in:
          </p>
        </motion.div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(16, 185, 129, 0.05))'
              }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 