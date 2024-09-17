import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

export const Header = () => {

  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          {/* <img className="logoImg" src="//images.squarespace-cdn.com/content/v1/581e7274725e25cfd5417a1a/1486220864774-IQLJQXC84ARHX2NY2N4M/Kira+Noel+Logo+%2872dpi%29.png" alt="logo" /> */}
          <h1>Milo</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamberger" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item className="headerNav">
              <Nav.Link className="headerLink">Info</Nav.Link>
            </Nav.Item>
            <Nav.Item className="headerNav">
              <Nav.Link className="headerLink">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item className="headerNav">
              <Nav.Link className="headerLink">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item className="headerNav">
              <Nav.Link className="headerLink">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="headerNav">
              <Nav.Link className="headerLink">About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="headerNav">
              <Nav.Link className="headerLink">Portfolio</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};