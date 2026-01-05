import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'ahmad.hammoud.qa@hotmail.com',
      link: 'mailto:ahmad.hammoud.qa@hotmail.com',
      color: 'email'
    },
    {
      // Use official WhatsApp brand icon since this opens a WhatsApp chat
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      content: '+961 81 610 746',
      // Opens WhatsApp chat with this number
      link: 'https://wa.me/96181610746',
      color: 'whatsapp'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Lebanon, Beirut',
      link: null,
      color: 'location'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      content: 'Connect with me',
      link: 'https://www.linkedin.com/in/ahmad-hammoud-qa/',
      color: 'linkedin'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      content: 'View my projects',
      link: 'https://github.com/ahmad99-cpu',
      color: 'github'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss how I can help ensure your software quality and deliver exceptional user experiences</p>
        </div>
        <div className="contact-grid">
          {contactMethods.map((method, index) => {
            const cardContent = (
              <>
                <div className={`contact-card-icon ${method.color}`}>
                  <i className={method.icon}></i>
                </div>
                <h3>{method.title}</h3>
                <p>{method.content}</p>
              </>
            );

            return method.link ? (
              <a 
                key={index}
                href={method.link} 
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-card"
              >
                {cardContent}
              </a>
            ) : (
              <div key={index} className="contact-card">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;

