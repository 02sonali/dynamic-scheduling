import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default class ProgressBarComponent extends React.Component {
    constructor(props) {
        super(props);
        // fetch('/taskboard').then(res => res.json()).then(data => {
        //     console.log(data)
        // });
    }

    render() {
        const now = 60;
        return (
            <div className="bordered-container p-2">
                <ProgressBar now={now} variant="success" label={`In use : ${now}%`} />
                <span className="font-12">Total Machines: 20</span>
            </div>
        )
    }
}

