import React from 'react';

function Navbar() {
  return (
    <div className=' flex z-10'>
      <div className='flex-1 inline-flex flex-wrap h-10 items-center justify-between bg-transparent bg-amber-500 '>
        <div className='inline-flex'>
          <div className=' h-5 bg-slate-100 ml-9 w-20'></div>
        </div>
        <div className='inline-flex'>
          <img className='h-8 mr-5' src='https://img.icons8.com/ios/50/000000/user--v3.png' alt='avatar'/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
