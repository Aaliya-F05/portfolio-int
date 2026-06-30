import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="contact-card card">
        <div className="contact-content">
          <h2>Let's Connect</h2>
          <p>
            I'm currently open to new opportunities and collaborations. 
            Whether you have a question, a project idea, or just want to say hi, 
            feel free to drop me a message!
          </p>
          
          <a href="mailto:aaliyafathimaofficial@gmail.com" className="email-button">
            <Mail size={20} />
            Say Hello
          </a>
        </div>
        
        <div className="contact-footer">
          <p>© {new Date().getFullYear()} Aaliya Fathima. Built with React & Vite.</p>
          <div className="footer-socials">
            <a href="https://github.com/Aaliya-F05" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/aaliyafathima" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
