import React, {useEffect} from 'react'
import DrumPad from './DrumPad'
import _ from 'lodash';

function DrumMachine() {
    // const kick = new Audio("808/snd1.wav");
    // const snare = new Audio("808/snd3.wav");
    // const hat = new Audio("808/snd7.wav");

    const pads = ['KICK', 'SNARE', 'HAT', '808', 'CLAP', 'RIDE', 'PERC1', 'PERC2', 'PERC3']
    const validPads = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const keyToPad = {
      1: 'KICK',
      2: 'SNARE',
      3: 'HAT',
      4: '808',
      5: 'CLAP',
      6: 'RIDE',
      7: 'PERC1',
      8: 'PERC2',
      9: 'PERC3',
    }

    function playPad(pad) {
      // # If the key we press matches note and is not empty we want to get element by id of that note and get the src of the audio
      if (!_.isEmpty(pad)) {
        const noteAudio = new Audio(document.getElementById(pad).src);
        noteAudio.play();
        noteAudio.volume = 0.05;
      }
    }


    function handlePadDown(event){
      // # Check if the event is repeating if so just return nothing
      if (event.repeat) {
        return;
      }
      // # If our event does not include valid keys return nothing
      if(!validPads.includes(event.key)){
        return
      }
      const key = event.key;
      // # When correct key on keyboard is pushed we play the corresponding note
      playPad(keyToPad[key]);
      let element = document.getElementById(keyToPad[key]+'1');
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

    useEffect(() => {
      window.addEventListener('keydown', handlePadDown);
    
      return () => {
        window.removeEventListener('keydown', handlePadDown);
      };
    });

    const drumPads = pads.map((pad, index) => {
      return (
          <DrumPad
            key={index}
            pad={pad}
          />
      );
  });

  const padAudio = pads.map((pad, index) => {
    return (
      <audio
        id={pad}
        key={index}
        src={`../../pads/${pad}.wav`}
      />
    );
  });



  return (
    <div>
      <div className="drum-pad">
        {drumPads}
      </div>
      <div>
        {padAudio}
        </div>
    </div>
  )
}

export default DrumMachine