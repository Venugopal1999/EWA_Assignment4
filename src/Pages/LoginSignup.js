import React from 'react'
import './Css/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <div className='loginsignup-field'>
          <p>UserName:</p><input type='text' placeholder='User Name'/>
          </div>
          <div className='loginsignup-field'>
          <p>
          Password:</p><input type='password' placeholder='Password'/>
          </div>
          <div className='loginsignup-field'>
          <p>
          Retype Password:</p><input type="password" placeholder='Re-Password' />
          </div>
          <div className='loginsignup-field'>
          <p>UserType:</p><select name='usertype' ><option value='customer' selected>Customer</option><option value='retailer'>Store Manager</option><option value='manager'>Salesman</option></select> </div>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login"> Already have an account? <span> Login here</span></p>
      </div>
    </div>
  )
}

export default LoginSignup