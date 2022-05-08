import React from 'react'
import '../css/logo.css'
import logo from '../images/Group6607.png';
const Logo= props => {
  return (
    <div className='logoContainer'>
      <img className="logoimg" src={logo} alt="ikincielProject"></img>
    </div>
  );
}

export default Logo;