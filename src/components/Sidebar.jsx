import React from 'react';

function Sidebar() {
  return (
    <div className='md:flex flex-col md:flex-2 box-border p-3  hidden bg-slate-400  '>
      <div className='flex self-center'>
        <img  src='/images/avatar.png' alt='avatar' />
      </div>
      <div className='flex flex-col flex-1'>
        <div className=' mb-3 h-8 bg-orange-300 '></div>        
        <div className=' mb-3 h-8 bg-orange-300 '></div>        
        <div className=' mb-3 h-8 bg-orange-300 '></div>        
        <div className=' mb-3 h-8 bg-orange-300 '></div>        
        <div className=' mb-3 h-8 bg-orange-300 '></div>        
      </div>
      <div className='mb-7 bg-red-500 h-5'></div>
    </div>
  );
}

export default Sidebar;
