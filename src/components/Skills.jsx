import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript (JS)', 'C', 'Python']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express']
    },
    {
      title: 'Tools & Databases',
      skills: ['MongoDB', 'MySQL', 'Git', 'Docker']
    }
  ];

  return (
    <section className="section" id="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card card">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
