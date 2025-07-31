import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope,
  FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook
} from "react-icons/fa";

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formDataObject = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formDataObject).toString(),
    })
      .then(() => {
        toast.success("🎉 Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        form.reset();
      })
      .catch((error) => {
        toast.error("❌ Failed to send message. Please try again.");
        console.error("Form error:", error);
      });
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
              If you have a project that needs some creative touch or you're
              looking to hire, feel free to reach out.
            </p>

            <div className="contact-info-container">
              <div className="contact-item">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Location</h4>
                  <p>Kangra, Himachal Pradesh</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 7876298387</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email</h4>
                  <p>Sahilpatial522@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <motion.a href="https://github.com/Anonymous777X" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}><FaGithub /></motion.a>
              <motion.a href="https://www.linkedin.com/in/sahilpatyal/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}><FaLinkedin /></motion.a>
              <motion.a href="https://www.instagram.com/sahil_ptyal/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}><FaInstagram /></motion.a>
              <motion.a href="https://www.facebook.com/sahil.patial.566" target="_blank" rel="noopener noreferrer" whileHover={{ y: -5 }}><FaFacebook /></motion.a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="form-title">Send Me a Message</h3>
            <form
              ref={formRef}
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <motion.button type="submit" className="btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
