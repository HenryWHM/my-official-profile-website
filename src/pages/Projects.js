import React from 'react';
import './CommonBox.css';
import { useState, useEffect } from 'react';
import projectsProfile from '../data/projects.json';

const Projects = () => {
    const [projects, setProjects] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(false);

    useEffect(() => {
      setProjects(projectsProfile.project_cards);
    }, []);

    if (!projects) {
      return (<p>Loading...</p>)
    }

    return (
      <div className="projects_container">
          {projects.map((project, index) => {
              const projectCard = (
                  <div
                      className="common-box"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                          cursor: project.link ? 'pointer' : 'default',
                          transition: 'all 0.3s ease' // Smooth hover effect
                      }}
                  >
                      <img className="common-image" src={project.pic} alt={project.title} />
                      <div className="common-text">
                          <h2>{project.title}</h2>
                          <p>{project.context}</p>
                      </div>
                  </div>
              );

              return project.link ? (
                  <a
                      key={index}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'inherit' }} // Maintain styling
                  >
                      {projectCard}
                  </a>
              ) : (
                  <div key={index}>{projectCard}</div>
              );
          })}
      </div>
  );
}

export default Projects;

