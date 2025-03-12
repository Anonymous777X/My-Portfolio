import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      date: '2021 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      description: 'Lead the frontend development team in building responsive and user-friendly web applications. Implemented modern React architectures and mentored junior developers.'
    },
    {
      date: '2018 - 2021',
      title: 'Web Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained websites and applications for clients across various industries. Worked with JavaScript, React, and Node.js to create dynamic user interfaces.'
    },
    {
      date: '2016 - 2018',
      title: 'Frontend Developer',
      company: 'Creative Agency Co.',
      description: 'Collaborated with designers to implement pixel-perfect designs. Built interactive websites using HTML, CSS, and JavaScript with a focus on performance and accessibility.'
    },
    {
      date: '2014 - 2016',
      title: 'Junior Web Developer',
      company: 'Startup Ventures',
      description: 'Started my career working on various web projects. Gained experience in HTML, CSS, and JavaScript while contributing to the development of company websites.'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        
        <motion.div
          className="experience-timeline"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
            >
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-company">{exp.company}</div>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 