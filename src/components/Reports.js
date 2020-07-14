import React from 'react';
import BarChart from './charts/BarChart';
import GaugeChart from './charts/GaugeChart';
function Reports() {
    return(
        <div>
           <BarChart/>
           <GaugeChart/>
        </div>
    )
}
export default Reports;