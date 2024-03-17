import React, {useState} from 'react';
import AccordionBody from './AccordionBody';
import AccordionTitle from './AccordionTitle';

type AccordionPropsType = {
  title: string
  isCollapsed: boolean
  toggleCollapsed: (value: boolean) => void
};

function Accordion(props: AccordionPropsType) {
  console.log("Accordion render");

  const {title, isCollapsed, toggleCollapsed} = props;

  return (
    <div>
      <AccordionTitle title={title} toggleCollapsed={toggleCollapsed} isCollapsed={isCollapsed} />
      { !isCollapsed && <AccordionBody /> }
    </div>
  );
}

export default Accordion;