import React from 'react';
import img2 from "./img2.jpg";
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <img src={img2} className='headerImage' alt='header'/>
    </div>
  )
}

export default Header