import React,{ useState } from 'react'
import * as Tone from 'tone'
import { Sequencer } from 'react-nexusui';
import sound from "../assets/test.mp3"
import kick from "../assets/kick.wav"
import snare from "../assets/snare.wav"
import hat from "../assets/hat.wav"


function SequencerMain() {

  // const k = new Tone.Player(kick).toDestination
  // const s = new Tone.Player(snare).toDestination
  // const h = new Tone.Player(hat).toDestination

  // let index = 0;
  // Tone.Transport.scheduleRepeat(repeat, '16n')
  // Tone.Transport.start();

  // function repeat() {
  //   let step = index % 16;
  //    this.kickInput = React.createRef();
  //   if (this.kickInput.checked) {
  //     k.start();
  //   }
  //   index++
  // }
function handleChange() {
  const osc = new Tone.Oscillator().toDestination();
  // repeated event every 8th note
  Tone.Transport.scheduleRepeat((time) => {
    // use the callback time to schedule events
    osc.start(time).stop(time + 0.1);
  }, "8n");
  // transport must be started before it starts invoking events
  Tone.Transport.start();
}

  

  return (
    <div>
    <div className="sequencer">
      <div className="kick" id="kick" onChange={handleChange}>
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
      </div>
      <div className="snare" onChange={handleChange}>
      <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
      </div>
      <div className="hat">
      <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
      </div>
      <div className="col">
      <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
      </div>
      <div className="col">
      <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
      </div>
      <div className="col">
      <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
      </div>
      <div className="col">
      <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
      </div>
      <div className="col">
      <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
        <input type="checkbox" className="seq" />
      </div>
      <style>{'body { background-color: #8d8e8f; }'}</style>
    </div>
    </div>
  )
}

export default SequencerMain