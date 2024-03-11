import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating';
import PageTitle from './components/PageTitle';



function App() {


  return (
    <div className="App">

      <PageTitle title='This is APP component' />
      <Rating />

      <Accordion title='Menu' isCollapsed={false} />
      <Accordion title='Users' isCollapsed={true} />

      <Rating />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

export default App;

















