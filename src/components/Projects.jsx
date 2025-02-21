// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects fade-in">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item slide-in">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Project One" 
            className="project-img" 
          />
          <h3>Project One</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item slide-in">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Project Two" 
            className="project-img" 
          />
          <h3>Project Two</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* Add more project items if desired */}
      </div>
    </section>
  );
};

export default Projects;
