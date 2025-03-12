import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      text: "Working with this developer was an excellent experience. Their attention to detail and technical expertise helped us launch our project ahead of schedule and with outstanding quality.",
      name: "Sarah Johnson",
      title: "Project Manager, Tech Solutions",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      text: "One of the most talented developers I've worked with. They have a great eye for design and an impressive ability to solve complex problems with elegant solutions.",
      name: "Michael Chen",
      title: "CTO, Startup Ventures",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      text: "I was impressed by the level of communication and professionalism. Our website redesign exceeded expectations and has received fantastic feedback from our users.",
      name: "Jessica Williams",
      title: "Marketing Director, Creative Brand",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Client Testimonials
        </motion.h2>
        
        <motion.div
          className="testimonials-content"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Here's what some of my clients and colleagues have to say about working with me.
            I strive to deliver exceptional results and a positive experience on every project.
          </p>
        </motion.div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="testimonial-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-author-info">
                  <h4>{testimonial.name}</h4>
                  <div className="testimonial-author-title">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 