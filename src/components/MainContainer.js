import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TaskBoard from './TaskBoard';
import EventLogs from './EventLogs';
import MfgSetup from './mfgSetup/MfgSetup';
import Reports from './Reports';

function MainContainer() {
    return(
        <div id="page-content-wrapper">
            <Switch>
                <Route exact path="/">
                    <TaskBoard/>
                </Route>
                <Route path="/reports">
                    <Reports/>
                </Route>
                <Route path="/mfg-setup">
                    <MfgSetup/>
                </Route>
                <Route path="/event-logs">
                    <EventLogs/>
                </Route>
            </Switch>
        </div>
    )
}
export default MainContainer;