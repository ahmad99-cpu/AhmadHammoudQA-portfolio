import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Distribution Management System',
      description: 'Designed and executed an end-to-end test automation framework using Cypress and Playwright to validate core distribution workflows. Covered critical user journeys including order processing, inventory handling, and system integrations to ensure reliable and stable releases.',
      tags: ['Cypress', 'Playwright', 'Functional Testing'],
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'E-Commerce Platform with Live Delivery Tracking',
      description: 'Performed comprehensive end-to-end manual testing on an e-commerce platform, covering product browsing, cart, checkout, payment flows, and live delivery tracking. Collaborated with stakeholders to validate requirements and ensure a smooth user experience from order placement to real-time shipment tracking.',
      tags: ['Manual Testing', 'E-Commerce', 'Delivery Tracking', 'Functional Testing'],
      icon: 'fas fa-shopping-cart'
    },
    {
      title: 'Order Management System',
      description: 'Comprehensive QA testing for a mobile application enabling customers to order coffee, track orders in real-time, and providing staff with order management capabilities. Designed and executed test cases covering customer ordering flows, real-time order tracking, staff dashboard functionality, and multi-user role validation. Ensured seamless integration between customer and staff interfaces, validated order status updates, and tested cross-platform compatibility.',
      tags: ['Mobile Testing', 'Manual Testing', 'Order Management', 'Real-time Tracking', 'Cross-platform'],
      icon: 'fas fa-coffee'
    },
    {
      title: 'Mobile App Data Extraction',
      description: 'End-to-end mobile automation script to extract data from a mobile application and save it to an Excel sheet using Appium for data tracking and comparison.',
      tags: ['Appium', 'Maven', 'Excel'],
      icon: 'fas fa-mobile-alt'
    },
    {
      title: 'API Testing Framework',
      description: 'Developed and executed REST API test suites using Postman, validating request and response structures, status codes, and integration flows. Ensured API reliability and data consistency across multiple endpoints as part of system integration testing.',
      tags: ['Postman', 'REST API', 'Integration Testing'],
      icon: 'fas fa-plug'
    },
    
    // {
    //   title: 'Performance Testing Suite',
    //   description: 'Load and performance testing framework using JMeter for web applications.',
    //   tags: ['JMeter', 'Performance', 'Load Testing', 'Analysis'],
    //   icon: 'fas fa-tachometer-alt'
    // },
    // {
    //   title: 'Security Testing Framework',
    //   description: 'Comprehensive security testing approach including vulnerability assessment and penetration testing.',
    //   tags: ['Security', 'OWASP', 'Penetration', 'Vulnerability'],
    //   icon: 'fas fa-shield-alt'
    // },
    // {
    //   title: 'CI/CD Test Integration',
    //   description: 'Integrated automated testing into CI/CD pipeline using Jenkins and GitLab CI.',
    //   tags: ['Jenkins', 'CI/CD', 'Docker', 'GitLab'],
    //   icon: 'fas fa-sync-alt'
    // }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my testing expertise across manual and automation testing</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                 
                </div>
                <div className="project-placeholder">
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

