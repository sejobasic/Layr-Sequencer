import React from 'react';
import * as Helpers from '../Helpers';
import '../App.css';


function StepSequencerSquare({ active, value, onClick, id }) {
  
  // toggle the square when active and add styling
  if(document.getElementById(id)){
    let currentSquare = document.getElementById(id);
    (active && Helpers.hasClass(currentSquare, 'filled')) ? 
    currentSquare.classList.add('active') : currentSquare.classList.remove('active');
  }

  // animate the line going through the blocks
  let activeStyles ={};
  if(active){
    activeStyles.anim8 = "glow 800ms ease-out infinite alternate";
  }

  return (
    <div
      style={{
        animation: activeStyles.anim8,
        background: activeStyles.bg,
      }}
      className="square"
      onClick={onClick}
      id={id}
    >
      {value}
    </div>
  );
};

export default StepSequencerSquare;