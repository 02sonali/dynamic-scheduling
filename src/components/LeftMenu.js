import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function LeftMenu() {
    return(
        <div id="sidebar-wrapper" className="left-menu-container">
           <ListGroup>
                <Link to="/"><ListGroup.Item>Task Board</ListGroup.Item></Link>
                <Link to="/reports"><ListGroup.Item>Reports</ListGroup.Item></Link>
                <Link to="/mfg-setup"><ListGroup.Item>Mfg. Setup</ListGroup.Item></Link>
                <Link to="/event-logs"><ListGroup.Item>Event Logs</ListGroup.Item></Link>
            </ListGroup>
        </div>
    )
}
export default LeftMenu;