import React, { useState } from 'react';
import style from './toggle.module.css';

type UncontrolledTogglePropsType = {
  
}
export function UncontrolledToggle(props: UncontrolledTogglePropsType) {
  console.log("UncontrolledToggle render");

  const [toggle, setToggle] = useState(false);

  return (
    <div className={style.toggleWrapper}>
      <div className={toggle ? style.toggleOn : `${style.toggleOn} ${style.toggleOff}`}>
        <div onClick={() => setToggle(!toggle)} className={!toggle ? style.bgLeft : `${style.bgLeft} ${style.bgRight}`}></div>            
            <div className={style.text}>
               <span className={!toggle ? style.hide : style.show}>on</span>
               <span className={toggle ? style.hide : style.show}>off</span>
            </div>
        </div>
    </div>
  )
};


