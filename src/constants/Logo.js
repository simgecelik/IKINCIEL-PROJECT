import React from 'react'
import '../scss/logo.css'
import logo from '../images/Group6607.png';
const Logo= props => {
  return (
    <div className='logoContainer'>
      <img src={logo} alt="ikincielProject"></img>
    </div>
  );
}

export default Logo;