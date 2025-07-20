import React from 'react';
import './Footer.css'
import reactLogo from '../../assets/react.svg'

function Footer() {
  return (
    <div className='footer'>
        
       <img src={reactLogo} alt="" width={20}/> Created with by Unanymous <img src={reactLogo} alt="" width={20} />
    </div>
  );
}

export default Footer;
