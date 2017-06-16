import React from "react";

import ToneTrends from "./tone_trends";
import Personality from "./personality";
import Documents from "./documents";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabClasses: [
        "dashboard-tab selected-tab",
        "dashboard-tab unselected-tab",
        "dashboard-tab unselected-tab"
      ],
      selectedIndex: 0,
      blurbs: []
    };

    this.clickTab = this.clickTab.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      blurbs: newProps.blurbs
    })
  }

  componentWillMount() {
    this.props.fetchBlurbs();
  }

  clickTab(e) {
    let index = $(e.currentTarget).index();
    if (index === this.state.selectedIndex) {
      return;
    }

    let tabClasses = this.state.tabClasses;
    for (let i = 0; i < tabClasses.length; i++) {
      if (i === index) {
        tabClasses[i] = "dashboard-tab selected-tab";
      } else {
        tabClasses[i] = "dashboard-tab unselected-tab";
      }
    }

    this.setState({
      selectedIndex: index,
      tabClasses: tabClasses
    });
  }

  render() {
    this.components = [
      <ToneTrends blurbs={this.state.blurbs} fetchBlurbs={this.props.fetchBlurbs}/>,
      <Personality personality={this.state.personality} fetchPersonality={this.props.fetchPersonality} updatePersonality={this.props.updatePersonality}/>,
      <Documents blurbs={this.state.blurbs} fetchBlurbs={this.props.fetchBlurbs}/>
    ];

    return (
      <div className="dashboard">
        <h1>You're logged in!</h1>
      </div>
    )
  }
}

export default Dashboard;
