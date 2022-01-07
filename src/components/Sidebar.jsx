import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='mainsidebar'>
      <div className='sideavatar'>
        <img className='sideavatarimg' src='/images/avatar.png' alt='avatar' />
      </div>
      <div className='sideitems'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='logout'></div>

      <div className='sidefooter'></div>
    </div>
  );
}

export default Sidebar;
