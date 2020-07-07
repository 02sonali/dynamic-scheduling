import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';

function LeftMenu() {
    return(
        <div id="sidebar-wrapper" className="left-menu-container">
           <ListGroup>
                <NavLink to="/" exact activeClassName="active"><ListGroup.Item>Task Board</ListGroup.Item></NavLink>
                <NavLink to="/reports" activeClassName="active"><ListGroup.Item>Reports</ListGroup.Item></NavLink>
                <NavLink to="/mfg-setup" activeClassName="active"><ListGroup.Item>Mfg. Setup</ListGroup.Item></NavLink>
                <NavLink to="/event-logs" activeClassName="active"><ListGroup.Item>Event Logs</ListGroup.Item></NavLink>
            </ListGroup>
        </div>
    )
}
export default LeftMenu;