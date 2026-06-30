import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Junior Software Engineer',
      company: 'AOT Technologies',
      date: 'June 10 – July 30, 2024',
      description: [
        'Worked with the Formsflow Professional Services team, contributing to Proof of Concepts (POCs) using the Formsflow platform.',
        'Assisted in client-focused projects by testing features, validating workflows, handling client requirements, and supporting the implementation of business solutions.'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      school: 'CUSAT SOE',
      date: '2025 – Present'
    },
    {
      degree: 'Diploma in Computer Engineering',
      school: 'Govt Women Polytechnic College Kalamassery',
      date: '2022 – 2024'
    }
  ];

  return (
    <section className="section" id="experience">
      <h2>Experience & Education</h2>
      
      <div className="experience-container">
        <div className="timeline-group">
          <h3 className="group-title">Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item card">
                <div className="timeline-header">
                  <h4>{exp.role} <span>@ {exp.company}</span></h4>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <ul className="timeline-desc">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-group">
          <h3 className="group-title">Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item card">
                <div className="timeline-header">
                  <h4>{edu.degree}</h4>
                  <span className="timeline-date">{edu.date}</span>
                </div>
                <p className="timeline-school">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
