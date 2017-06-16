import React from "react";

import ToneTrends from "./tone_trends";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.components = [
      <ToneTrends/>
    ];

    return (
      <div className="dashboard">
        <h1>You're logged in!</h1>
      </div>
    )
  }
}

export default Dashboard;
