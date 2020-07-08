import React from 'react';
import Button from 'react-bootstrap/Button';
import GanttChart from './common/ganttChart/GanttChart';

class TaskBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cards = ["Total Machines", " Jobs", "Completed", "Tardiness", "Earliness", "Machine Utilization", "Idle Machines"];
        const jobTypes = ["Job Type", "Shaping", "Turning", "Milling", "Grinding"];
        const allCards = cards.map(card => <div className="col" key={card}>
                <div className="task-card">
                    {card}
                </div>
            </div>
        )
        const allJobs = jobTypes.map(job => <div className="col" key={job}>
                <div className="job-type-color">
                    {job}
                </div>
            </div>
        )
        return(
            <div className="container">
                <div className="row sub-header">
                    <div className="col"></div>
                    <div className="col">
                    </div>
                    <div className="col">
                        <Button variant="success" className="float-right">Start Production</Button>
                    </div>
                </div>
                <div id="mfg-container" className="p-4">
                    <div className="row">
                        {allCards}
                    </div>
                    <div className="job-color-container mx-auto">
                        <div className="row mt-4">
                            {allJobs}
                        </div>
                    </div>
                    <div className="p-3">
                        {/* <GanttChart/> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default TaskBoard;