import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/session_actions';
import App from "./app";
import Splash from "./splash";
import DashboardContainer from "./dashboard/dashboard_container";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  redirectIfLoggedIn(nextState, replace) {
    const currentUser = store.getState().session.currentUser;

    store.dispatch(clearErrors());
    if (currentUser) {
      hashHistory.push("/home");
    }
  }

  ensureLoggedIn(nextState, replace) {
    const currentUser = store.getState().session.currentUser;

    if (currentUser === null) {
      hashHistory.push("/");
    }
  }

  render() {
    let store = this.props.store;
    return <Provider store={ store }>
      <Router history={hashHistory}>
        <Route path="/" component={ App } >
          <IndexRoute component={ Splash } onEnter={this.redirectIfLoggedIn} />
          <Route path="/home" component={ DashboardContainer } onEnter={this.ensureLoggedIn} />
          <Route path="/redirect" component={Splash} onEnter={this.redirectIfLoggedIn} />
          <Route path="/logout" component={Splash} onEnter={this.ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>;
  }
}

export default Root;
