// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about slide-in">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src="https://via.placeholder.com/400" 
          alt="Sample Profile" 
          className="profile-img fade-in" 
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula dictum risus, at facilisis leo vestibulum a. Mauris pulvinar quam in velit tincidunt, non interdum erat fermentum. Donec interdum consectetur odio, nec tincidunt erat bibendum sed. Suspendisse potenti. Phasellus id nunc nisi. Curabitur ac efficitur nulla, sit amet fermentum sapien.
        </p>
      </div>
    </section>
  );
};

export default About;
