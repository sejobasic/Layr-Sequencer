import React, {useState} from 'react'
import Piano from "./Piano";
import DrumMachine from "./DrumMachine";
import ModalJam from './modals/ModalJam'
import ModalChords from './modals/ModalChords'
import { GiPianoKeys } from 'react-icons/gi';
import { motion } from 'framer-motion'


function Jam() {
  const [jamShow, setJamShow] = useState(false);
  const [chordShow, setChordShow] = useState(false)

  return (
    <motion.div
    className="jam-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit ={{opacity: 0}} 
    >
      <div className="jam-icon">
        <i
        id="jam-modal"
        className="fa-regular fa-circle-question"
        onClick={() => setJamShow(true)}
      ></i>
      </div>
      <ModalJam
        show={jamShow}
        onHide={() => setJamShow(false)}
      />
      <div className="chord-icon">
        <GiPianoKeys
        id="chord-modal"
        className="chord"
        onClick={() => setChordShow(true)}
      />
      </div>
      <ModalChords
        show={chordShow}
        onHide={() => setChordShow(false)}
      />
      <Piano />
      <DrumMachine />
      <style>{'body { background-color: #8d8e8f; }'}</style>
    </motion.div>
  )
}

export default Jam