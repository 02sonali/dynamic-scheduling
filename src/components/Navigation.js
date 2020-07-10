import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../nagarro_icon.png';

function Navigation() {
    return(
        <div className="nav-container">
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Dynamic Scheduling</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <img src={logo} className="justify-content-end logo"/>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Navigation;