import React, {useState} from 'react';
import AccordionBody from './AccordionBody';
import AccordionTitle from './AccordionTitle';

type AccordionPropsType = {
  title: string
  isCollapsed: boolean
};

function Accordion(props: AccordionPropsType) {
  console.log("Accordion render");

  
  const [isCollapsed, setIsCollapsed] = useState(props.isCollapsed);

  return (
    <div>
      <AccordionTitle title={props.title} toggleCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
      { !isCollapsed && <AccordionBody /> }
    </div>
  );
}

export default Accordion;
