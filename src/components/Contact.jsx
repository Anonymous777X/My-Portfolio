// src/components/Contact.jsx
import React from 'react';
import { useRef,useState } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter,FaInstagram, FaFacebook, } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formDataObject = new FormData(formRef.current);
    
    fetch("/", {
      method: "POST",
      body: formDataObject,
    })
      .then(() => {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // ✅ Reset fields
      })
      .catch((error) => alert("Error: " + error));
    };

  return (
    <section id="contact" className="contact contact-section">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs some creative touch, or if you're
              looking to hire, please feel free to reach out.
            </p>
            <div className="contact-info-container">
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Kangra, Himachal Pradesh</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+91 7876298387</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>Sahilpatial522@gmail.com</p>
              </div>
            </div>
            </div>
            
            <div className="social-links">
              <motion.a 
                href="https://github.com/Anonymous777X" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/sahilpatyal/" 
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
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <FaFacebook />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="form-title">Send Me a Message</h3>
            <form ref={formRef} name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"  
                    placeholder="Your Email" 
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name='subject'
                  placeholder="Subject" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name='message'
                  placeholder="Your Message" 
                  required
                  rows="6"
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
