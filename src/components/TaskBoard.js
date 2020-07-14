import React from 'react';
import GanttTimeline from './charts/ganttChart/GanttTimeline';
import JobCompletionChart from './charts/JobCompletionChart';
import ProgressBarComponent from './charts/ProgressBar';

class TaskBoard extends React.Component {
    constructor(props) {
        super(props);
        // fetch('/taskboard').then(res => res.json()).then(data => {
        //     console.log(data)
        // });
    }

    render() {
        const jobTypes = [{type:"Shaping", color: "yellow"}, {type:"Turning", color: "purple"}, {type:"Milling", color: "orange"}, {type: "Grinding", color: "blue"}, {type:"Breakdown", color: "grey"}];
        const allJobs = jobTypes.map(job => <div className="col" key={job.type}>
                <div className="job-type-color" color={job.color}>
                    {job.type}
                </div>
            </div>
        )
        return(
            <div className="container">
                <div id="mfg-container" className="p-4">
                    <div className="row pl-4 text-left">
                        <div className="col-9">
                            <div className="row">
                                <div className="col-4">
                                    <h6>Job Completion: </h6>
                                </div>
                                <div className="col-8">
                                </div>
                            </div>
                            <JobCompletionChart/>
                        </div>
                        <div className="col-3">
                            <h6>Machine Utilization:</h6>
                            <ProgressBarComponent/>
                        </div>
                    </div>
                    <div className="job-color-container">
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