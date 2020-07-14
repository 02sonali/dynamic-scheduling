import React, {useState, useRef} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../nagarro_icon.png';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import AddMachine from './popups/MachinePopup';
import AddJob from './popups/JobPopup';

const Navigation = () => {
    const [show, setShow] = useState(false);
    const [showMachinePopup, setShowMachinePopup] = useState(false);
    const [machinePopupMode, setMachinePopupMode] = useState("add"); //3 modes - add, remove, inactive
    const [showJobPopup, setShowJobPopup] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    function addMachine() {
        setMachinePopupMode("add");
        setShowMachinePopup(true);
        setShow(false);
    }
    function removeMachine() {
        setMachinePopupMode("remove");
        setShowMachinePopup(true);
        setShow(false);
    }
    function inactivateMachine() {
        setMachinePopupMode("inactivate");
        setShowMachinePopup(true);
        setShow(false);
    }
    function addJob() {
        setShowJobPopup(true);
        setShow(false);
    }
    
    return(
        <div className="nav-container" ref={ref}>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Dynamic Scheduling</Navbar.Brand>
                <Button variant="success" id="start-production-button"> &#9655; &nbsp; Start Production</Button>
                <Navbar.Collapse className="justify-content-start ml-4">
                    <div ref={ref}>
                        <Button variant="secondary" onClick={handleClick}>...</Button>
                        <Overlay
                            show={show}
                            target={target}
                            placement="bottom"
                            container={ref.current}
                            containerPadding={20}
                        >
                            <Popover id="popover-contained">
                            <Popover.Content>
                                <ListGroup variant="flush">
                                    <ListGroup.Item action onClick={addMachine}>Add Machine</ListGroup.Item>
                                    <ListGroup.Item action onClick={removeMachine}>Remove Machine</ListGroup.Item>
                                    <ListGroup.Item action onClick={inactivateMachine}>Inactivate Machine</ListGroup.Item>
                                    <ListGroup.Item action onClick={addJob}>Add Job</ListGroup.Item>
                                </ListGroup>
                            </Popover.Content>
                            </Popover>
                        </Overlay>
                    </div>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <img src={logo} className="justify-content-end logo" alt="Nagarro"/>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <AddMachine show={showMachinePopup} closePopup={setShowMachinePopup} mode={machinePopupMode}/>
            <AddJob show={showJobPopup} closePopup={setShowJobPopup}/>
        </div>
    )
}

export default Navigation;