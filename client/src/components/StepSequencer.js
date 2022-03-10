import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import StepSequencerSquare from './StepSequencerSquare';
import InputWithLabel from './InputWithLabel';
import { Button, Offcanvas} from 'react-bootstrap';


// notes to be played in sequencer/C-minor Scale
const notes = [
  "C3",
  "D3",
  "D#3",
  "F3",
  "G3",
  "G#3",
  "A#3",
  "C4"
];

// 16x8 grid for sequencer
const initialPattern = [
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
];

// create new synth instrument
const synth = new Tone.PolySynth().toMaster();

// create effects here
let delayEffect = new Tone.PingPongDelay("4n", 0.2).toMaster();
let chorusEffect = new Tone.Chorus(4, 2.0, 0.5).toMaster();
let reverbEffect = new Tone.JCReverb(0.2).toMaster();


function StepSequencer() {
  const [currentColumn, setColumn] = useState(0);
  const [pattern, updatePattern] = useState(initialPattern);
  const [bpm, setBpm] = useState(120);
  const [pingPongDelay, setPingPongDelay] = useState(false);
  const [chorus, setChorus] = useState(false);
  const [reverb, setReverb] = useState(false);
  const [show, setShow] = useState(false);

  function handleClose() {
      setShow(false);
  }

  function handleShow() {
      setShow(!show);
  }

  useEffect(
    () => {
      const loop = new Tone.Sequence(
        (time, col) => {
          // update current column for animation
          setColumn(col);

          // loop
          // eslint-disable-next-line array-callback-return
          pattern.map((row, noteIndex) => {
            // if column is active
            if (row[col]) {
              // play note from row
              synth.triggerAttackRelease(notes[noteIndex], "8n", time);
              Tone.Master.volume.value = -15
            }
          })
        },
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ],
        "16n"
      ).start(0);
      return () => loop.dispose();
    },
    [ pattern ] // update when pattern changes
  )

  // set BPM
  function handleBpmInput (event) {
    let value = event.target.value;
    setBpm(value);
    Tone.Transport.bpm.value = value;
  };

  // play / stop functions
  function play() {
    Tone.Transport.toggle();
  };

  function stop() {
    Tone.Transport.stop();
  };

  // delay on / off
  function handlePingPongDelay() {
    setPingPongDelay(!pingPongDelay);
    if(!pingPongDelay){
      synth.connect(delayEffect);
    } else {
      synth.disconnect(delayEffect);
    }
  }

  // chorus on / off
  function handleChorus() {
    setChorus(!chorus);
    if(!chorus){
      synth.connect(chorusEffect);
    } else {
      synth.disconnect(chorusEffect);
    }
  }

    // reverb on / off
  function handleReverb() {
    setReverb(!reverb);
    if(!reverb){
      synth.connect(reverbEffect);
    } else {
      synth.disconnect(reverbEffect);
    }
  }

  // update pattern
  function setPattern({ x, y, value }) {
    // copy pattern and invert the value
    const patternCopy = [ ...pattern ];
    patternCopy[y][x] = +!value;
    updatePattern(patternCopy);
    
    // set square color to 'on' or 'off' state
    let currentSquare;
    const squares = document.getElementsByClassName('square');
    (y>0) ? currentSquare = squares[(y*16)+x] : currentSquare = squares[x];
    patternCopy[y][x] ? currentSquare.classList.add('filled') : currentSquare.classList.remove('filled');
  };

  return (
    <div>
      <>
        <div className="inst-btn">
          <Button className="btn-glow" variant="primary" onClick={handleShow} >
            Instruments/FX
          </Button>
        </div>
        <Offcanvas className="sidebar"
          backdrop={false} 
          scroll={true}
          show={show} 
          onHide={handleClose}
        >
          <Offcanvas.Header closeVariant="white" closeButton>
            <Offcanvas.Title>Pick Instrument</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h2 className="sidebar-elements">Synths</h2>
            <h2 className="sidebar-elements">Drum Kits</h2>
            <h2 className="sidebar-elements">Effects</h2>
            <div>
              <label>
                <input className="delay" type="checkbox" checked={pingPongDelay} onChange={handlePingPongDelay}>
                </input> Delay
              </label>
            </div>
            <div>
              <label>
                <input className="chorus" type="checkbox" checked={chorus} onChange={handleChorus}>
                </input> Chorus
              </label>
            </div>
            <div>
              <label>
                <input className="reverb" type="checkbox" checked={reverb} onChange={handleReverb}>
                </input> Reverb
              </label>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <div id="controls">
        <InputWithLabel
          id="bpm"
          value={bpm}
          isFocused
          onInputChange={handleBpmInput}
        >
          <strong>BPM:</strong>
        </InputWithLabel>
        <div className="play-stop">
          <i id="play-btn" className="fa-solid fa-play" onClick={() => play()}></i>
          <i id="stop-btn" className="fa-solid fa-stop" onClick={() => stop()}></i>
        </div>
      </div>
      <div  id="step-sequencer">
        {pattern.map((row, y) => (
          <>
          <label className="row-label">{notes[y]}</label>
          <div className="sq-seq" key={y}>
            {row.map((value, x) => (
              <StepSequencerSquare
                key={x}
                active={currentColumn === x}
                selected={value}
                onClick={() => setPattern({ x, y, value })}
                id={x.toString()+'-'+y.toString() }
              />
            ))}
          </div>
          </> 
        ))}
      </div>
    </div>
  );
};

export default StepSequencer