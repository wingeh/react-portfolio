
//  header
//  THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
//  WHEN I view the navigation titles
//  THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
//  WHEN I click on a navigation title
//  THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

import React, { useState } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './styles/header.css';
import logo from './../images/logo.png';
import * as FaIcons from 'react-icons/fa';


const AppNavbar = () => {
  return (
    <>
      <Navbar bg='primary' variant='dark' expand='xl'>
        <Container fluid>
          <Navbar.Brand href='/'>
          <img src={logo} alt="Andrew Wing" className="logo"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
                <Nav.Link href='/'>
                  <FaIcons.FaUserNinja /> About Me
                  </Nav.Link>
                  <Nav.Link href='/projects'>
                    <FaIcons.FaProjectDiagram /> Projects
                  </Nav.Link>
                  <Nav.Link href='/cv'>
                    <FaIcons.FaFileDownload /> Download CV 
                  </Nav.Link>
                  <Nav.Link href='/contact'>
                    <FaIcons.FaFileDownload /> Contact 
                  </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default AppNavbar;