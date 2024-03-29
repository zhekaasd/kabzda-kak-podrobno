import React, { useState } from 'react';
import style from './toggle.module.css';

type ToggleType = {
  toggle: ConstrainBoolean
  setToggle: (value: boolean) => void
}
export function Toggle(props: ToggleType) {
  console.log("Toggle render");

  const { toggle, setToggle } = props;


  return (
    <div className={style.toggleWrapper}>
      <div className={toggle ? style.toggleOn : `${style.toggleOn} ${style.toggleOff}`}>
        <div onClick={() => setToggle(!toggle)} className={!toggle ? style.bgLeft : `${style.bgLeft} ${style.bgRight}`}></div>            
            <div className={style.text}>
               <span className={!toggle ? style.hide : ''}>on</span>
               <span className={toggle ? style.hide : ''}>off</span>
            </div>
        </div>
    </div>
  )
};
