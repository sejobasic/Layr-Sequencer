/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Navbar, Nav, Container} from 'react-bootstrap';
import {Routes, Route, Link} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import logo from '../assets/logo3.png';
import SequencerMain from "./SequencerMain";
import Home from "./Home";
import Jam from "./Jam";
// import Ideas from "./Ideas";

function NavBar({user, setUser}) {

  // # fetch logout route in backend
  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null)
      }
    });
  }

  return (
    <div>
      <Navbar bg="light" expand="lg" id="navbar" variant="dark">
        <Container id="navbar">
          <Navbar.Brand className="nav-logo" href="#home">
            <img src={logo} alt="logo-image"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="nav-text" as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link className="nav-text" as={Link} to={"/sequencer"}>Sequencer</Nav.Link>
              {/* <Nav.Link className="nav-text" as={Link} to={"/ideas"}>Ideas</Nav.Link> */}
              <Nav.Link className="nav-text" as={Link} to={"/jam"}>Jam</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text className="nav-user" id="navbar">
            Logged in as: {user.username}
          </Navbar.Text>
          <i className="fa-solid fa-arrow-right-from-bracket" onClick={handleLogoutClick}></i>
        </Container>
      </Navbar>
      <div>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home user={user} />}/>
            <Route path="/sequencer" element={<SequencerMain user={user} />}/>
            {/* <Route path="/ideas" element={<Ideas user={user} />}/> */}
            <Route path="/jam" element={<Jam />}/>
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default NavBar