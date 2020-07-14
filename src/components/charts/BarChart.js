import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
class BarChart extends Component {
  render() {
    return (
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: ["M01", "M02", "M03", "M04", "M05", "M06", "M07"]
          },
          yAxis: {
            type: "value"
          },
          series: [{ 
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "bar"
          }]
        }}
      />
    );
  }
}
export default BarChart;