import React from 'react';

function Graph1() {
  return (
    <div className='flex flex-col p-5 flex-1 justify-between bg-yellow-200 m-2'>
      <div className='flex sm:flex-row flex-col flex-1'>
        <div className='h-10 sm:flex-1 mb-6 mr-2 bg-zinc-500'></div>
        <div className='h-10 sm:flex-1 mb-6 mr-2 bg-zinc-500'></div>
        <div className='h-10 sm:flex-1 mb-6 mr-2 bg-zinc-500'></div>
      </div>
      <div className=' bg-orange-600 h-44'></div>
    </div>
  );
}

export default Graph1;
