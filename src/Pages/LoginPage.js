import React, { useContext, useState } from 'react';

import './Css/LoginPage.css';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { LoginTypes, createLoginDetails } from '../Reducer/loginReducer';
import { AuthTypes } from '../Reducer/authReducer';

const LoginPage = (props) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    usertype: 'customer', // Default usertype
  });
  const navigate  = useNavigate ();
  const dispatch = useDispatch();
  const{all_product}=useContext(ShopContext);
  const [errorMessage,setErrorMessage]= useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // const addProduct = (id, name, price, image, category, manufacturer, condition, discount, accessories = null) => {
  //   const newProduct = {
  //     id,
  //     name,
  //     price,
  //     image,
  //     category,
  //     manufacturer,
  //     condition,
  //     discount,
  //     accessories
  //   };
  
  //   all_product.push(newProduct);
  // };
  
  // // Example usage:
  // addProduct(
  //   "New Product ID",
  //   "New Product Name",
  //   99.99,
  //   "path/to/new_product_image.jpg",
  //   "new_category",
  //   "New Manufacturer",
  //   "New Condition",
  //   20.0,
  //   {
  //     accessory: [
  //       "New Accessory 1",
  //       "New Accessory 2"
  //     ]
  //   }
  // );
  
  // Now the new product is added to the 'all_product' array.
  

  const handleSubmit = (e) => {

    e.preventDefault();
    //console.log("login username ", registration);
    //console.log("login password", registration.password);
    // Add your login logic here
    // console.log('Form submitted:', formData);
    // // Reset the form if needed
    // setFormData({
    //   username: '',
    //   password: '',
    //   usertype: 'customer',
    // });
    // console.log(registration);

    const matchingRegistration = props.registration.find(
      (reg) => {
        
  
        return (
          reg.username === formData.username &&
          reg.password === formData.password &&
          reg.usertype.toLowerCase() === formData.usertype.toLowerCase()
        );
      }
    );

    const newLogin = {
      username: formData.username,
      password: formData.password,
      usertype: formData.usertype,
    };
    // dispatch(createLoginDetails({
    //   username: formData.username,
    //   password: formData.password,
    //   usertype: formData.usertype,
    // }));
 if (matchingRegistration) {
      console.log('Login successful!');
      dispatch({type: LoginTypes.ADD_LOGIN,loginDetails: newLogin});
      dispatch({type: AuthTypes.LOGIN , islogin: !props.islogin});
      console.log(AuthTypes.LOGIN);
      navigate('/');
  
    } else {
      setErrorMessage(true);
      console.log('Login failed. Invalid credentials.');
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='login-field'>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Enter your username'
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className='login-field'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className='login-field'>
            <label htmlFor='usertype'>UserType:</label>
            <select
              id='usertype'
              name='usertype'
              value={formData.usertype}
              onChange={handleChange}
            >
              <option value='customer'>Customer</option>
              <option value='retailer'>Store Manager</option>
              <option value='manager'>Salesman</option>
            </select>
          </div>
          {errorMessage && <p className="error-message">Login failed. Invalid credentials.</p>}
          <button type='submit'>Login</button>
        </form>
        <p className='login-signup'>
          Don't have an account? <span>Sign up here</span>
        </p>
      </div>
    </div>
  );
};

// LoginPage.PropTypes = {
//   registration: PropTypes.arrayOf(PropTypes.shape({
//     userName: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     repassword: PropTypes.string.isRequired,
//     userType: PropTypes.string.isRequired,
//   })).isRequired,
// };

const mapStateToProps = (state) => {
  console.log("mapstate ", state);
  return {
    registration : state.registration,
    islogin: state.islogin,
  };
};

const ConnectedLoginPage = connect(mapStateToProps)(LoginPage);

export default ConnectedLoginPage;
