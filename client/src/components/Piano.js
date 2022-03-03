import React from 'react'
import Key from './Key'

function Piano() {

    const notes = [
        'C2', 'Cf2', 'D2', 'Df2',
        'E2', 'F2', 'Ff2', 'G2', 'Gf2',
        'A2', 'Af2', 'B2',
        'C3', 'Cf3', 'D3', 'Df3',
        'E3', 'F3', 'Ff3', 'G3', 'Gf3',
        'A3', 'Af3', 'B3'
    ]


    const keyToNote = {
      z:  'C2',   
      q:  'Cf2', 
      x:  'D2',   
      w:  'Df2',  
      c:  'E2',   
      v:  'F2',   
      e:  'Ff2',  
      b:  'G2',   
      r:  'Gf2',  
      n:  'A2',   
      t:  'Af2',  
      m:  'B2',   
      a:  'C3',   
      y:  'Cf3',  
      s:  'D3',   
      u:  'Df3',  
      d:  'E3',   
      f:  'F3',   
      i:  'Ff3',  
      g:  'G3',   
      o:  'Gf3',  
      h:  'A3',   
      p:  'Af3',  
      j:  'B3',   
    };


    const keys = notes.map((note, index) => {
        return (
            <Key
              key={index}
              note={note}
              pressedKeys={pressedKeys}
            />
        );
    });
    
    
  return (
    <div className="piano">
        {keys}
        {/* <Key note="C"/>
        <Key flatNote="C#"/>
        <Key note="D" />
        <Key note="D#" />
        <Key note="E" />
        <Key note="F" />
        <Key note="F#" />
        <Key note="G" />
        <Key note="G#" />
        <Key note="A" />
        <Key note="A#" />
        <Key note="B" />
        <Key note="C" />
        <Key note="C#" />
        <Key note="D" />
        <Key note="D#" />
        <Key note="E" />
        <Key note="F" />
        <Key note="F#" />
        <Key note="G" />
        <Key note="G#" />
        <Key note="A" />
        <Key note="A#" />
        <Key note="B" /> */}
    </div>
  )
}

export default Piano