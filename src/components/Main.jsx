import React from 'react'
import Centercards from './Main/Centercards'
import Graph1 from './Main/Graph1';
import Graph2 from './Main/Graph2';
import Table from './Main/Table';

function Main() {
  return (
    <div className='flex flex-col flex-1 p-3 '>
      <div className='flex lg:flex-row flex-col flex-wrap'>
        <Graph1 />
        <Graph2/>
      </div>
      <Centercards />
      <Table/>
    </div>
  )
}

export default Main
