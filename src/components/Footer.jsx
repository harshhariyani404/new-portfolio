import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";   
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Logo / Title */}
        <div className="footer-logo">
          <h2>My Portfolio</h2>
          <p>Building the future with code 🚀</p>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://github.com/harshhariyani404" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/_h_hariyani/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/harsh-hariyani-732455273/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:harsh.hariyani404@gmail.com"><FaEnvelope /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
