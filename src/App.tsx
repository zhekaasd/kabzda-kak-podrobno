import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating';
import PageTitle from './components/PageTitle';
import { Toggle } from './components/toggle/Toggle';



function App() {

  
  const [on, setOn] = useState(false);

  return (
    <div className="App">

      <PageTitle title='This is APP component' />
      <Rating />
      
      <hr/>

      <Accordion title='Menu' isCollapsed={false} />
      <Accordion title='Users' isCollapsed={true} />


      <hr/>

      <Rating />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />

      <hr/>

      <Toggle />
      <Toggle on={false} />
      
    </div>
  );
}

export default App;

















