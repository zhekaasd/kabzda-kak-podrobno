import React, { useState } from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import Rating from './components/rating/Rating';
import PageTitle from './components/PageTitle';
import { Toggle } from './components/toggle/Toggle';
import { UncontrolledToggle } from './components/toggle/UncontrolledToggle';
import UncontrolledAccordion from './components/accordion/UncontrolledAccordion';
import UncontrolledRating from './components/rating/UncontrolledRating';


export type RatingType = 0 | 1 | 2 | 3 | 4 | 5;
function App() {

  
  const [toggle, setToggle] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [rating, setRating] = useState<RatingType>(0);

  return (
    <div className="App">

      <div>
        <PageTitle title=' controlled ' />
        <hr/>
        <Accordion title='Menu' isCollapsed={isCollapsed} toggleCollapsed={setIsCollapsed} />
        <hr/>
        <Rating value={rating} setRating={setRating} />
        <hr/>
        <Toggle toggle={toggle} setToggle={setToggle} />

      </div>

      <div style={{height: '100%', background: 'red'}}></div>

      <div>
        <PageTitle title=' uncontrolled ' />
        <hr/>
        <UncontrolledAccordion title='Users' />
        <hr/>
        <UncontrolledRating />
        <hr/>
        <UncontrolledToggle />

      </div>
      
    </div>
  );
}

export default App;

















