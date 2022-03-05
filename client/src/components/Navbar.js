/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import logo from '../assets/logo3.png';
import '../App.css'

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
      <Navbar bg="light" expand="lg" id="navbar">
        <Container id="navbar">
          <Navbar.Brand className="nav-logo" href="#home">
            <img src={logo} alt="logo-image"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
             <Nav.Link className="nav-text" as={Link} to={'/'}>Home</Nav.Link>
             <Nav.Link className="nav-text" as={Link} to={'/sequencer'}>Sequencer</Nav.Link>
             <Nav.Link className="nav-text" as={Link} to={'/ideas'}>Ideas</Nav.Link>
             <Nav.Link className="nav-text" as={Link} to={'/jam'}>Jam</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Text className="nav-user" id="navbar">
             Logged in as: {user.username}
          </Navbar.Text>
          <i class="fa-solid fa-arrow-right-from-bracket" onClick={handleLogoutClick}></i>
        </Container>
      </Navbar>
  )
}

export default NavBar