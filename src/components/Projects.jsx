import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'QuizApp',
      description: 'A responsive quiz application built with React that allows users to answer multiple-choice questions and receive their score instantly. The project focuses on creating an interactive and user-friendly quiz experience with a clean interface.',
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Aaliya-F05/Quiz-App',
      demo: null
    },
    {
      title: 'Campus Event App',
      description: 'A full-stack campus club and event management platform where students can explore clubs, register for events, volunteer, and stay updated with campus activities. Features for managing clubs and organizing events efficiently.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Aaliya-F05/campus-event-mongodb',
      demo: null
    },
    {
      title: 'VR Multiplayer Orb Collector',
      description: 'A multiplayer VR game developed during a VR/AR workshop where players compete to collect orbs in a virtual environment. The project explores immersive gameplay and multiplayer interaction using virtual reality technologies.',
      tech: ['Unity', 'C#', 'VR Development'],
      github: 'https://github.com/Aaliya-F05/VR',
      demo: null
    }
  ];

  return (
    <section className="section" id="projects">
      <h2>Featured Works</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card card">
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p>{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
