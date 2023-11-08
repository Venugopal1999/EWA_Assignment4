import React from 'react'
import './Hero.css'
import smarthome_img from '../Assets/site/smart-home-image.jpg'

const Hero = () => {
  return (
    <div className='hero'>
       <div className="hero-left">
       <img src={smarthome_img} alt=""/>
     <p> <h2>Whether looking to reduce energy consumption or strengthen security, homeowners are redefining daily life with smart home technology.</h2></p>
     <p><h1> Discover the future-forward tech that is boosting home efficiency and accessibility.</h1></p>
     </div>
       </div>
  )
}

export default Hero