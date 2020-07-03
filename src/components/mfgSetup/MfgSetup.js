import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import machineData from '../../data/MachineData.json';
import TableComponent from '../common/TableComponent';

class MfgSetup extends React.Component {
    render() {
        const machineCols = [
            {displayName: "Machine Type", name: "type"}, 
            {displayName: "Shaping", name: "shaping"}, 
            {displayName: "Tuning", name: "tuning"}, 
            {displayName: "Milling", name: "milling"}, 
            {displayName: "Grinding", name: "grinding"}, 
            {displayName: "Schedule Maintenance", name: "maintenance"}
        ];
        return(
            <div className="container">
                <div className="row sub-header">
                    <div className="col"></div>
                    <div className="col">
                        <ButtonGroup aria-label="Action type">
                            <Button variant="secondary">Machine</Button>
                            <Button variant="secondary">Jobs</Button>
                        </ButtonGroup>
                    </div>
                    <div className="col">
                        <Button variant="primary">Add Machine</Button>
                    </div>
                </div>
            <div id="mfg-container" className="p-4">
                <TableComponent headers={machineCols} data={machineData.machines}></TableComponent>
            </div>
            </div>
        )
    }
}
export default MfgSetup;