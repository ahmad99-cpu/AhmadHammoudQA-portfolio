import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: 'fas fa-bug',
      title: 'Manual Testing',
      skills: [
        'Functional Testing',
        'Non-Functional Testing',
        'Regression Testing',
        'Exploratory Testing',
        'Smoke & Sanity Testing',
        'Test Case & Scenario Design',
        'Bug Reporting & Tracking'
      ]
    },
    {
      icon: 'fas fa-tools',
      title: 'Testing & Bug Tracking Tools',
      skills: [
        'Jira (Bug Reporting)',
        'Excel (Custom Bug Tracking & Test Reports)',
        'Postman (API Testing)',
        'Browser DevTools',
      ]
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Methodologies',
      skills: [
        'Agile / Scrum (Sprint Planning, Daily Stand-ups, Reviews, Retrospectives)',
        'User Story Analysis',
        'Requirements Validation'
      ]
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Test Automation',
      skills: [
        'Cypress',
        'Playwright',
        'Appium',
        'Selenium WebDriver'
      ]
    }
  ];
  

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies, tools, and methodologies I work with</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

