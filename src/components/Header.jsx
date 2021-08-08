
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
    <header>
        <h1>
            <img src={logo} alt="Andrew Wing" className="signature"/>
        </h1>
        <nav>
            <a href="/about"> <FaIcons.FaUserNinja /> About Me</a>
            <a href="/projects"><FaIcons.FaProjectDiagram /> Projects</a>
            <a href="/cv"><FaIcons.FaFileDownload /> CV</a>
            <a href="/contact"><FaIcons.FaEnvelopeOpenText /> Contact</a>
        </nav>

    </header>
    );
};

export default AppNavbar;