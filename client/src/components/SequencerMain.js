import React,{ useState } from 'react'
import * as Tone from 'tone'
import ModalSeq from './modals/ModalSeq'
import {motion, AnimatePresence} from "framer-motion"
import '../App.css'


function SequencerMain() {
  const [modalShow, setModalShow] = useState(false);
  
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
      <i 
        class="fa-regular fa-circle-question"
        onClick={() => setModalShow(true)}
      ></i>
      <ModalSeq
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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