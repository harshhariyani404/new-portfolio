import React from 'react'

const Navbar = ({ menuOpen }) => {
  return (
    <nav className={menuOpen ? "show" : ""}>
      <a href="#about">About Me</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact Me</a>
    </nav>
  )
}

export default Navbar
