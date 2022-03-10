import React from 'react'
import {Modal} from 'react-bootstrap'
import jam from '../../assets/jam.png'
import '../../App.css'



function ModalJam(props) {

  return (
<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <div className='my-modal'>
    <Modal.Body>
      <Modal.Header className="modal-header" closeButton="true">
      </Modal.Header>
      <h2>WELCOME TO THE JAM PAGE</h2>
      <p>USE YOUR KEYBOARD AND PRESS THE CORRESPONDING KEYS FOR EACH DEVICE TO PLAY SOUND.</p>
      <p>CLICKING THE PIANO BUTTON BELOW THE HELP BUTTON WILL SHOW A VARIETY OF CHORDS THAT CAN BE PLAYED.</p>
      
      <div>
        <img className="img-fluid" src={jam} alt="Help Info" />
      </div>
      </Modal.Body>
    </div>
    </Modal>
  )
}

export default ModalJam