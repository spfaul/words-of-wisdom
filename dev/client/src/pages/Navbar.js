import React from 'react';
import ClickableLink from '../components/ClickableLink';
import './Navbar.css'

function Navbar() {



  return (
      <div className="navLinks">
          <ClickableLink text='Home' target='/' />
          <ClickableLink text="Submit" target='/submit'/>      
          <ClickableLink text='About' target="/about" />
          <ClickableLink text="Github"/>            
      </div>
	)
}


export default Navbar;