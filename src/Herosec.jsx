import React from 'react'
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import './Herosec.css'
import skill from '../src/assets/skill.js'
import jewelry from './assets/jewelry.jpg'
import cupcakee from './assets/cupcakee.jpg'
import milk from './assets/milk.jpg'
import cooking from './assets/cooking.jpg'

const Herosec = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section" id="home">
        <div className="hero-content">
          <p>Hi, I am</p>
          <h1>Harsh Hariyani</h1>
          <p>Web Developer</p>
          <a href="#contact" className="contact-btn">Contact Me</a>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/harsh-hariyani-732455273/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:harsh.hariyani404@gmail.com"><FaEnvelope /></a>
            <a href="https://github.com/harshhariyani404" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQH-x1PJMSJjDw/profile-displayphoto-scale_400_400/B4DZeHFYKWGUAk-/0/1750318025601?e=1759363200&v=beta&t=Y4HRHSs2hd9UItT894L83iyZB2st2O-jJhLbk_oPwL8" alt="Harsh Hariyani" />
        </div>
      </div>

      {/* About Section */}
      <div className="about" id="about">
        <h2 className="section-heading">About Me</h2>
        <div className="about-content">
          <p>Hi, I’m Harsh Hariyani, a Computer Science student and passionate Web Developer. I enjoy building clean, responsive websites and learning new technologies. I’m currently improving my skills in React.js, JavaScript, and modern web design. My goal is to create user-friendly web applications and grow as a full-stack developer.</p>
        </div>
        <div className="about-info">
          <h3>Information</h3>
          <ul>
            <li><strong>Name:</strong> Harsh Hariyani</li>
            <li><strong>Degree:</strong> B.E in Computer Science</li>
            <li><strong>Email:</strong> harsh.hariyani404@gmail.com</li>
            <li><strong>Phone:</strong> +91 94087 13407</li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills" id="skills">
        <h2 className="section-heading">Skills</h2>
        <div className="skills-list">
          {skill.map((item) => (
            <div key={item.id} className="skill-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects" id="projects">
        <h2 className="section-heading">Projects</h2>
        <div className="projects-content">
          <div className="project-item">
            <h3>Jewelry website</h3>
            <img src={jewelry} alt="Jewelry website" />
          </div>
          <div className="project-item">
            <a href="https://harshhariyani404.github.io/Cupcake/">
              <h3>Cupcake website</h3>
              <img src={cupcakee} alt="Cupcake website" />
            </a>
          </div>
          <div className="project-item">
            <h3>Diry Dass</h3>
            <img src={milk} alt="Milk website" />
          </div>
          <div className="project-item">
            <a href="https://harshhariyani404.github.io/Restaurant/">
              <h3>Restaurant website</h3>
              <img src={cooking} alt="Restaurant website" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact" id="contact">
        <h2 className="section-heading">Contact Me</h2>
        <form className="contact-form" action="https://formspree.io/f/xzzaaqzw" method="POST">
          <input type="text" name="name" placeholder="Your Name" autoComplete='off' required />
          <input type="email" name="email" placeholder="Your Email" autoComplete='off' required />
          <textarea name="message" rows="5" placeholder="Your Message" autoComplete='off' required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  )
}

export default Herosec
