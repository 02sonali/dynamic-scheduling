import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../nagarro_icon.png';
import Button from 'react-bootstrap/Button';

function Navigation() {
    return(
        <div className="nav-container">
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Dynamic Scheduling</Navbar.Brand>
                <Button variant="success" id="start-production-button"> &#9655; &nbsp; Start Production</Button>
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