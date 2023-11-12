import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/site/smart-home-icon.png'
import { Link, useNavigate } from 'react-router-dom';
import { getTotalCartItems } from '../../Reducer/cartReducer';
import { connect, useDispatch } from 'react-redux';
import { AuthTypes } from '../../Reducer/authReducer';

const Navbar = (props) => {
    const[menu,setMenu]= useState("home");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handlelogout=()=>{
      console.log("logout ",props.islogin.islogin);
     dispatch({ type: AuthTypes.LOGOUT , islogin: !props.islogin.islogin});
      console.log(props.islogin);
      console.log('b');
      navigate('/login');
    };
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
    { props.islogin.islogin ? (
          <button onClick={handlelogout}>Logout</button>
        ) : (
          <Link style={{ textDecoration: 'none' }} to='/login'>
            <button>Login/SignUp</button>
          </Link>
        )}
        <Link style={{textDecoration: 'none'}} to ='/cart'> <p>Cart</p> </Link>
        <div className="nav-cart-count">{props.totalCartItems}</div>
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    totalCartItems: getTotalCartItems(state.cart),
    islogin: state.islogin, // Get total cart items from the Redux store
  };
};

export default connect(mapStateToProps)(Navbar);
