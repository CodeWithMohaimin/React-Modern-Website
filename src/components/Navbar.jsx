import React from 'react'
import "../styleCompo/navbar.style.css"

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navBox">
        <div className="navLogo">
          <h1>Mohaimin</h1>
        </div>
        <div className="bun">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className='navLink'>
          <a href=".home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
        
        </div>
    </div>
  )
}
