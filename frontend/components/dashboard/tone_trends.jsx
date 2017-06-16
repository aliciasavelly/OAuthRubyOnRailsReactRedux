import React from "react";
import ToneChart from "./tone_chart";

class ToneTrends extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.fields) {
      return null;
    }
    let index = this.analysisIndex;
    let chart;
    this.counter += 1;
    if (!!this.state.dataSets[index] && this.state.dataSets[0].length > 0) {
      chart = (
      <div className="chart">
        <ToneChart index={index} title={this.titles[index]} fields={this.fields[index]} dataSet={this.state.dataSets[index]} />
      </div>)
    } else if (this.counter > 3) {
      chart = <h2 className="graph-filler empty-chart chart-inner">Click the new 'New Analysis' button at the top to generate your tone trends graph here.</h2>
    }

    return (
      <div className="dashboard-page">
        {chart}
      </div>);
  }
}

export default ToneTrends;
