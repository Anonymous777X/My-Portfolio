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
      date: '2021 - 2024',
      title: 'Chandigarh Group of Colleges, Punjab',
      company: '8.02 SGPA',
      description: 'Chandigarh Group of Colleges, Landran – A premier institute in Punjab known for quality education, strong placements, and industry collaborations.'
    },
    {
      date: '2019 - 2021',
      title: 'Dr. B.R. Ambedkar Govt. Polytechnic College, Himachal Pradesh',
      company: '73%',
      description: 'Dr. B.R. Ambedkar Govt. College, Ambota, HP – A reputed institution in Himachal Pradesh offering quality education and diverse academic programs.'
    },
    {
      date: '2016 - 2017',
      title: 'D.A.V.M. Public School, Himachal Pradesh',
      company: '8.2 CGPA',
      description: 'D.A.V.M Public School, Badhal Thore – A school focused on quality education and holistic development, following DAV traditions and values.'
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Educational Qualifications
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