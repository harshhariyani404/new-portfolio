import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";   
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
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:yourmail@gmail.com"><FaEnvelope /></a>
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
