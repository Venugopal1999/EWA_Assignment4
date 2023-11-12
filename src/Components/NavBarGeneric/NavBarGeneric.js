import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import logo from '../Assets/site/smart-home-icon.png';
import { getTotalCartItems } from '../../Reducer/cartReducer';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const NavBarGeneric = ({ loginDetails }) => {
  const [menu, setMenu] = useState('home');
  console.log("login username usertype1111", loginDetails);
  
  // Extract usertype from loginDetails
  const usertype  = loginDetails.length>0? loginDetails[loginDetails.length - 1].usertype: 'Customer';
  const username  = loginDetails.length>0? loginDetails[loginDetails.length - 1].username: 'Venu111';
  console.log("usertype",usertype);

  return (
    <div className="navbar">
      
      <ul className="nav-menu">
        
        
        
        
        {/* Conditionally display links based on usertype */}
        {usertype === 'retailer' && (
          <>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/addproduct">
                Add Product
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/deleteproduct">
                Delete Product
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/updateproduct">
                Update Product
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/viewOrderPage">
                View Orders
              </Link>
            </li>
          </>
        )}

        {usertype === 'customer' && (
          <>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/viewOrderPage">
                View Orders
              </Link>
            </li>
          </>
        )}

        {usertype === 'manager' && (
        <>
            <li>
                <Link style={{ textDecoration: 'none' }} to="/login">
                    Create Customer Account
                </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/addorder">
                Add Order
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/deleteorder">
                Delete Order
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/updateorder">
                Update Order
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/viewOrderPage">
                View Orders
              </Link>
            </li>
        </>
          
          
        )}
        <div className="nav-greeting">
            {username && <p>Hello, {username}!</p>}
        </div>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loginDetails: state.loginDetails, // Get loginDetails from the Redux store
    totalCartItems: getTotalCartItems(state.cart),
  };
};

export default connect(mapStateToProps)(NavBarGeneric);