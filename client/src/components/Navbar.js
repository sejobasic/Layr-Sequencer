import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';
import logo from '../assets/logo3.png';
import '../App.css'

function NavBar({user, setUser}) {

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
      <Navbar bg="light" expand="lg" id="navbar">
        <Container id="navbar">
          <Navbar.Brand className="nav-logo" href="#home">
            <img src={logo} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link id="nav-text" as={Link} to={'/'}>Home</Nav.Link>
             <Nav.Link id="nav-text" as={Link} to={'/favorites'}>Sequencer</Nav.Link>
             <Nav.Link id="nav-text" as={Link} to={'/favorites'}>Ideas</Nav.Link>
             <Nav.Link id="nav-text" as={Link} to={'/favorites'}>Jam</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Text className="nav-text" id="navbar">
             Logged in as: {user.username}
          </Navbar.Text>
          <Button variant="primary" onClick={handleLogoutClick}>
             Logout
          </Button>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar