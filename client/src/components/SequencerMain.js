import React,{useState} from 'react'
import * as Tone from 'tone'
import ModalSeq from './modals/ModalSeq'
import Sidebar from "./modals/Sidebar";
import {motion} from 'framer-motion'



function SequencerMain() {
  const [modalShow, setModalShow] = useState(false);

  
  return (
    <motion.div
      className="seq-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit ={{opacity: 0}}
    > 
      <Sidebar />
    <div className="sequencer">
      <div className='seq-icon'>
      <i 
        id="seq-modal"
        className="fa-regular fa-circle-question"
        onClick={() => setModalShow(true)}
      ></i>
      </div>
      <ModalSeq
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <style>{'body { background-color: #8d8e8f; }'}</style>

    </div> 

    </motion.div>
  )
}

export default SequencerMain