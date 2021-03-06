import React, { useState }from 'react'
import { Button, Offcanvas} from 'react-bootstrap';
import '../../App.css'



function Sidebar({checked, onChange }) {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(!show);
    }

  return (
    <>
    <div className="inst-btn">
    <Button className="btn-glow" variant="primary" onClick={handleShow} >
      Instruments
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
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default Sidebar