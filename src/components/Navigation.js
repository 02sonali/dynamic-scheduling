import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return(
        <div className="nav-container">
            <Navbar bg="light" variant="light" fixed="top">
                <Navbar.Brand href="#home">Dynamic Scheduling</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Nagarro
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Navigation;