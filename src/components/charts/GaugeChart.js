import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
class GaugeChart extends Component {
  render() {
    return (
      <ReactEcharts
        option = {{
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            series: [
                {
                    name: '',
                    type: 'gauge',
                    detail: {formatter: '{value}%'},
                    data: [{value: 50, name: ''}]
                }
            ]
        }}
      />
    );
  }
}
export default GaugeChart;