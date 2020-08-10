import React from 'react'
import {Nav, Navbar } from 'react-bootstrap'

const NavbarComponent = () => (
    <div>
      <div>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
  
  export default NavbarComponent;