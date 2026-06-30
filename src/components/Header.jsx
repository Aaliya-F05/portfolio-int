import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profImg from '../assets/prof.jpeg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Aaliya Fathima</h1>
        <h2 className="title">IT Student & Developer</h2>
        
        <div className="bio">
          <p>
            Hi, I'm Aaliya, a developer who loves turning ideas into simple, useful, and interactive web experiences. I'm passionate about full-stack development and enjoy working with technologies like JavaScript, React, Node.js, and MongoDB to build applications that are both functional and user-friendly. I enjoy solving challenging problems, learning new technologies, and constantly improving my skills through hands-on projects.
          </p>
          <p>
            Beyond coding, I'm always curious to explore new ideas, whether it's participating in hackathons, experimenting with creative UI designs, or learning something completely new. I believe every project is an opportunity to grow, collaborate, and create something meaningful. My goal is to build technology that makes a positive impact while continuing to learn and evolve as a developer.
          </p>
        </div>

        {/* User photo placeholder based on "add this as photo" request */}
        <div className="photo-container">
          <div className="profile-photo">
            <img src={profImg} alt="Aaliya Fathima" />
          </div>
        </div>
      </div>

      <div className="header-socials">
        <a href="https://github.com/Aaliya-F05" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/aaliyafathima" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:aaliyafathimaofficial@gmail.com" className="social-link" aria-label="Email">
          <Mail size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
