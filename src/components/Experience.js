import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      date: 'Present',
      title: 'Quality Assurance Engineer',
      company: 'Weave Wider',
      responsibilities: [
        'Collaborated with cross-functional teams to understand client requirements and end-to-end system workflows',
        'Understanding how systems and projects should work from end-to-end',
        'Designed and implemented automated test suites using Cypress and Playwright for web applications',
        'Applied test automation across multiple projects and platforms to support regression and release validation',
        'Developed mobile automation scripts for data extraction and testing'
      ]
    },
    {
      date: 'Internship',
      title: 'QA (Manual Testing) Intern',
      company: 'Weave Wider',
      responsibilities: [
        'Executed manual testing across multiple features, validating functional requirements and edge cases',
        'Created and maintained detailed test cases and test scenarios to support regression testings',
        'Identified, reported, and tracked software defects using clear reproduction steps',
        'Collaborated with developers and team members to verify fixes and ensure quality delivery'
      ]
    },
    {
      date: 'Internship',
      title: 'Angular Intern',
      company: 'Weave Wider',
      responsibilities: [
        'Gained hands-on experience with Angular fundamentals, component-based architecture, and application structure',
        'Worked with the team to understand frontend workflows, improving collaboration between QA and development',
        'Applied best practices to understand UI behavior and potential frontend issues during testing'
      ]
    },
    {
      date: 'Internship',
      title: 'Laravel Intern',
      company: 'TechnoCitylb',
      responsibilities: [
        'Collaborated with a team to build a complete e-commerce platform using Laravel',
        'Developed backend functionality using Laravel PHP framework',
        'Contributed to backend functionality and supported full-stack development workflows',
        'Gained experience with database-driven features, business logic, and team collaboration'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My professional journey in quality assurance</p>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

