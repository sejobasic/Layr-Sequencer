import React from 'react'
import {Modal} from 'react-bootstrap'
import video from '../../assets/seq-video.mov';
import '../../App.css'



function ModalSeq(props) {
  return (
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='my-modal'>
      <Modal.Body>
        <Modal.Header closeButton="true">
        </Modal.Header>
        <h2>WELCOME TO THE SEQUENCER PAGE.</h2>
        <p> 
          THE 16X8 GRID OF BUTTONS REPRESENTS A SERIES OF SOUNDS THAT WILL BE PLAYED IN A LOOP ONCE SELECTED.
          THE BPM INPUT BOX DETERMINES THE BEATS PLAYED PER MINUTE, IT IS A MEASUREMENT OF TEMPO, FOLLOWED BY THE PLAY AND STOP BUTTONS.
        </p>
        <p>
        THE INSTRUMENTS AND FX BUTTON WILL ALLOW YOU TO SWITCH THROUGH A VARIETY OF SOUNDS AND FX.
        PLEASE FOLLOW ALONG WITH THE VIDEO FOR MORE UNDERSTANDING.
        </p>
      <div>
        <video className="img-fluid" autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
    </div>
        {/* <h4>Gif Image Here</h4>
        <p>
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
        </p> */}
      </Modal.Body>
      </div>
    </Modal>
  )
}

export default ModalSeq