import React, {useState} from 'react'
import sound from "../assets/test.mp3"
import * as Tone from 'tone'

function Synth() {


    function handleSynth(){
      const player = new Tone.Player(sound).toDestination();
      Tone.loaded().then(() => {
        player.start();
      });
      Tone.Master.volume.value = -20
    }

    

  return (
      <button className="synth-landing" onMouseOver={handleSynth}>
      </button>
  )
}

export default Synth