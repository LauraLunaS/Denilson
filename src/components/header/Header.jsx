import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav
} from "react-bootstrap";


const Header = () => {
  return(
  <Navbar bg="dark" expand="lg">
    <LinkContainer to="/">
      <Navbar.Brand>Portfolio</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="nav">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Header;
