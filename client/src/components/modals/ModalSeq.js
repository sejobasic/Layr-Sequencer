import React from 'react'
import {Modal} from 'react-bootstrap'
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
        <h4>Gif Image Here</h4>
        <p>
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
          Instructions on how to use device here
        </p>
      </Modal.Body>
      </div>
    </Modal>
  )
}

export default ModalSeq