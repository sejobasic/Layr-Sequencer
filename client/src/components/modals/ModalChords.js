import React from 'react'
import {Modal} from 'react-bootstrap'
import chords from '../../assets/chords.png'
import '../../App.css'



function ModalChords(props) {

  return (
    <Modal
      {...props}
      backdrop="false"
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header className="modal-header" closeButton="true"></Modal.Header>
      <div className='my-modal'>
        <img className="img-fluid" src={chords} alt="Help Info" />
      </div>
    </Modal>
  )
}

export default ModalChords