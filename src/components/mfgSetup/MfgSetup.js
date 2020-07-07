import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import machineData from '../../data/machine_data.json';
import jobData from '../../data/job_data.json';
import TableComponent from '../common/TableComponent';

class MfgSetup extends React.Component {
    constructor(props) {
        super(props);
        this.machineCols = [
            {displayName: "Machine Type", name: "type"}, 
            {displayName: "Shaping", name: "shaping"}, 
            {displayName: "Turning", name: "turning"}, 
            {displayName: "Milling", name: "milling"}, 
            {displayName: "Grinding", name: "grinding"}, 
            {displayName: "Schedule Maintenance", name: "maintenance"}
        ];

        this.jobsCols = [
            {displayName: "Job Type", name: "type"}, 
            {displayName: "Shaping", name: "shaping"}, 
            {displayName: "Turning", name: "turning"}, 
            {displayName: "Milling", name: "milling"}, 
            {displayName: "Grinding", name: "grinding"}
        ];
        
        this.state= {
            currentTab: "machine",
            data: machineData,
            cols: this.machineCols
        }
    }
    getJobs() {
        this.setState({"currentTab": "jobs", "data": jobData, "cols": this.jobsCols}); //todo-get job data
    }
    getMachines() {
        this.setState({"currentTab": "machine", "data": machineData, "cols": this.machineCols});
    }
    render() {
        return(
            <div className="container">
                <div className="row sub-header">
                    <div className="col"></div>
                    <div className="col">
                        <ButtonGroup aria-label="Action type">
                            <Button variant="secondary" className={`${this.state.currentTab==="machine" ? "active": ""}`} onClick={() => this.getMachines()}>Machine</Button>
                            <Button variant="secondary" className={`${this.state.currentTab==="jobs" ? "active": ""}`} onClick={() => this.getJobs()}>Jobs</Button>
                        </ButtonGroup>
                    </div>
                    <div className="col">
                        {/* <Button variant="primary" className="float-right">Add Machine</Button> */}
                    </div>
                </div>
                <div id="mfg-container" className="p-4">
                    <TableComponent headers={this.state.cols} data={this.state.data}></TableComponent>
                </div>
            </div>
        )
    }
}
export default MfgSetup;