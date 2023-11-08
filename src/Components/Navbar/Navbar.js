import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/site/smart-home-icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[menu,setMenu]= useState("home");
  return (
    <div className='navbar'>
    <div className="nav-logo">
        <img src={logo} alt=""/>
        <p> SmartHome</p>
    </div>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration: 'none',  }} to='/'>Home</Link> {menu==="home"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("smartdoorbell")}}> <Link style={{textDecoration: 'none'}} to='/smartdoorbell'>Smart Doorbell</Link> {menu==="smartdoorbell"?<hr/>:<></>}</li>
        <li  onClick={()=>{setMenu("smartdoorlock")}}> <Link style={{textDecoration: 'none'}} to ='/smartdoorlock'>Smart Doorlock </Link> {menu==="smartdoorlock"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("smartspeaker")}}> <Link style={{textDecoration: 'none'}} to ='/smartspeaker'>Smart Speaker</Link>{menu==="smartspeaker"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("smartlighting")}}> <Link style={{textDecoration: 'none'}} to ='/smartlighting'>Smart Lighting</Link >{menu==="smartlighting"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("smartthermostat")}}> <Link style={{textDecoration: 'none'}} to ='/smartthermostat'>Smart Thermostat</Link>{menu==="smartthermostat"?<hr/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
       <Link style={{textDecoration: 'none'}} to ='/login'> <button>Login</button></Link>
        <Link style={{textDecoration: 'none'}} to ='/cart'> <p>Cart</p> </Link>
        <div className="nav-cart-count">0</div>
    </div>
    </div>
  )
}

export default Navbar
