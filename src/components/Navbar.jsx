import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='nav'>
      <div className='mainnav'>
        <div className='navitem'>
          <div className='navfirstitem'></div>
        </div>
        <div className='navitem'>
          <img className='avatarimg' src='https://img.icons8.com/ios/50/000000/user--v3.png' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
