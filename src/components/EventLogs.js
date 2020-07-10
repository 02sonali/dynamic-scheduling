import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
// import TableComponent from './common/TableComponent';

class EventLogs extends React.Component {
    constructor(props) {
        super(props);
        this.cols = [
            {displayName: "Machine Type", name: "type"}, 
            {displayName: "Shaping", name: "shaping"}, 
            {displayName: "Tuning", name: "tuning"}, 
            {displayName: "Milling", name: "milling"}, 
            {displayName: "Grinding", name: "grinding"}, 
            {displayName: "Schedule Maintenance", name: "maintenance"}
        ];
        
        this.state= {
            currentTab: "day",
            cols: this.cols
        }
    }
    getDayData() {
        this.setState({"currentTab": "day"});
    }
    getWeekData() {
        this.setState({"currentTab": "week"});
    }
    getMonthData() {
        this.setState({"currentTab": "month"});
    }
    render() {
        return(
            <div className="container">
                <div className="row sub-header">
                    <div className="col"></div>
                    <div className="col">
                        <ButtonGroup aria-label="Action type">
                            <Button variant="success" className={`${this.state.currentTab==="day" ? "active": ""}`} onClick={() => this.getDayData()}>Day</Button>
                            <Button variant="success" className={`${this.state.currentTab==="week" ? "active": ""}`} onClick={() => this.getWeekData()}>Week</Button>
                            <Button variant="success" className={`${this.state.currentTab==="month" ? "active": ""}`} onClick={() => this.getMonthData()}>Month</Button>
                        </ButtonGroup>
                    </div>
                    <div className="col">
                        <Button variant="success" className="float-right">Download Log Report</Button>
                    </div>
                </div>
                <div id="event-container" className="p-4">
                    {/* <TableComponent headers={this.state.cols} data={this.state.data}></TableComponent> */}
                </div>
            </div>
        )
    }
}
export default EventLogs;