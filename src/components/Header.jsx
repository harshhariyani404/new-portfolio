import React, { useState } from 'react'
import Navbar from './Navbar'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="header">
      <div className="logo">My Portfolio</div>

      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Pass state to Navbar */}
      <Navbar menuOpen={menuOpen} />
    </div>
  )
}

export default Header
