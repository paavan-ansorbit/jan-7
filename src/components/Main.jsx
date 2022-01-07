import React from 'react'
import './Main.css'
import Centercards from './Main/Centercards'
import Graph1 from './Main/Graph1';
import Graph2 from './Main/Graph2';
import Table from './Main/Table';

function Main() {
  return (
    <div className='main'>
      <div className='graphcontainer'>
        <Graph1 />
        <Graph2/>
      </div>
      <Centercards />
      <Table/>
    </div>
  )
}

export default Main
