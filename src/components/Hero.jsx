import React from 'react'
import "../styleCompo/navbar.style.css"
import HeroImage from "../image/hero.png"


export default function hero() {
  return (
    <div className='hero'>
      <div className="heroText">
        <h1>Hi there,<br /> I'm Mohaimin </h1>
        <p className='para'>Frontend Developer from Bangladesh</p>
        <p className='para2'>A self-motivated, self-taught and an inspired team player, who is looking for opportunities intrigued and inclined towards areas of "Software Engineer".</p>
        <button id='btn'>Download Resume</button>
      </div>

      <div className="heroImage">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  )
}
