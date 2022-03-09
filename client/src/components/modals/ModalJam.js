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
      <Modal.Header className="modal-header" closeButton="true"></Modal.Header>
      <div className='my-modal'>
        <img className="img-fluid" src={jam} alt="Help Info" />
      </div>
    </Modal>
  )
}

export default ModalJam