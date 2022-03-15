import React,{ useState } from 'react'
import ModalSeq from './modals/ModalSeq'
import { motion } from 'framer-motion'
import StepSequencer from './StepSequencer';





function SequencerMain() {
  const [modalShow, setModalShow] = useState(false);


  return (
    <motion.div
      className="seq-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit ={{opacity: 0}}
    > 
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
      {/* <style>{'body { background-color: #eceaea; }'}</style> */}
      <div className='seq-main'>
        <StepSequencer/>
      </div>
      <style>{'body { background-color: #8d8e8f; }'}</style>
    </div> 

    </motion.div>
  )
}

export default SequencerMain