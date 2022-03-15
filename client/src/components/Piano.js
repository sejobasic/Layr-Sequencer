import React, {useEffect} from 'react'
import Key from './Key'
import _ from 'lodash';

function Piano() {

    // # Here we set which keyboard keys we want for flat(black) notes and naturals(white) notes
    const blackKeys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const whiteKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'a', 's', 'd', 'f', 'g', 'h', 'j'];
    const validKeys = [...blackKeys, ...whiteKeys];

    // # This is each note of piano 24 keys total
    const notes = [
        'C2', 'Cf2', 'D2', 'Df2',
        'E2', 'F2', 'Ff2', 'G2', 'Gf2',
        'A2', 'Af2', 'B2',
        'C3', 'Cf3', 'D3', 'Df3',
        'E3', 'F3', 'Ff3', 'G3', 'Gf3',
        'A3', 'Af3', 'B3'
    ]
    // # This maps keys on keyboard to piano notes
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

    // # This function will handle our audio
    function playNote(note) {
      // # If the key we press matches note and is not empty we want to get element by id of that note and get the src of the audio
      if (!_.isEmpty(note)) {
        const noteAudio = new Audio(document.getElementById(note).src);
        noteAudio.play();
        noteAudio.volume = 0.05;
      }
    }

    // # This function handles our keydown event
    function handleKeyDown(event){
      // # Check if the event is repeating if so just return nothing
      if (event.repeat) {
        return;
      }
      // # If our event does not include valid keys return nothing
      if(!validKeys.includes(event.key)){
        return
      }
      const key = event.key;
      // # When correct key on keyboard is pushed we play the corresponding note
      playNote(keyToNote[key]);
      let element = document.getElementById(keyToNote[key]+'1');
      // # Here we add pressed text to our class so that our ui changes on key down
      if (element){
        element.classList.add('pressed')
        // # After some time we remove the pressed text to change our ui
        setTimeout(()=>{
          element.classList.remove('pressed');
        },[200])
      }
      event.preventDefault()
    }

    // useEffect for event passing an empty array [] as the dependencies will make the effect run only on the initial render
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
    
      // cleanup our event after each render, React will call a fresh instance of handleKeyDown
      // it will call the previous instance’s cleanup function beforehand removing the previous listener. 
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    });

    // Iterate through notes array and create a key with an index and note prop
    const keys = notes.map((note, index) => {
        return (
            <Key
              key={index}
              note={note}
            />
        );
    });

    // Iterate through our notes array and create an audio tag with an id a key and the source path the audio files are coming from
    const audioFiles = notes.map((note, index) => {
      return (
        <audio
          id={note}
          key={index}
          src={`../../notes/${note}.mp3`}
        />
      );
    });

  return (
    <div className='piano-container'>
      <div className="piano">
        {keys}
      </div>
      <div>
        {audioFiles}
        </div>
    </div>
  )
}

export default Piano

