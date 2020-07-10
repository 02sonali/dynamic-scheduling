import React from 'react';
import Button from 'react-bootstrap/Button';
import GanttTimeline from './common/ganttChart/GanttTimeline';
class TaskBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cards = ["Total Machines", " Jobs", "Completed", "Tardiness", "Earliness", "Machine Utilization", "Idle Machines"];
        const jobTypes = [{type:"Shaping", color: "yellow"}, {type:"Turning", color: "purple"}, {type:"Milling", color: "orange"}, {type: "Grinding", color: "blue"}, {type:"Breakdown", color: "grey"}];
        const allCards = cards.map(card => <div className="col" key={card}>
                <div className="task-card">
                    {card}
                </div>
            </div>
        )
        const allJobs = jobTypes.map(job => <div className="col" key={job.type}>
                <div className="job-type-color" color={job.color}>
                    {job.type}
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
                    <GanttTimeline/>
                </div>
            </div>
        )
    }
}
export default TaskBoard;