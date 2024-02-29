import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'

function NavBar() {
    return (
        <Navbar className = "main-navbar"  expand="lg">
            <h3 className='logo' href="#home">Daas <br/>Good </h3>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#work">WORK</Nav.Link>
                    <Nav.Link href="#plans">PLANS</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
