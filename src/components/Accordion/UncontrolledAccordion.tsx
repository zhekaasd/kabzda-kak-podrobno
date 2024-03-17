import React, {useState} from 'react';
import AccordionBody from './AccordionBody';
import AccordionTitle from './AccordionTitle';

type AccordionPropsType = {
  title: string
};

function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("UncontrolledAccordion render");

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div>
      <AccordionTitle title={props.title} toggleCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
      { !isCollapsed && <AccordionBody /> }
    </div>
  );
}

export default UncontrolledAccordion;
