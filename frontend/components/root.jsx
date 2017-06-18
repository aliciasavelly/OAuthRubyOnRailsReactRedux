import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { clearErrors } from '../actions/session_actions';
import App from "./app";
import Splash from "./splash/splash";
import DashboardContainer from "./dashboard/dashboard_container";

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  redirectIfLoggedIn(nextState, replace) {
    const currentUser = store.getState().session.currentUser;

    store.dispatch(clearErrors());
    if (currentUser) {
      replace("/home");
    }
  }

  redirectIfLoggedOut(nextState, replace) {
    const currentUser = store.getState().session.currentUser;

    if (currentUser === null) {
      replace("/");
    }
  }

  render() {
    return <Provider store={ this.props.store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ Splash } onEnter={ this.redirectIfLoggedIn } />
          <Route path="/home" component={ DashboardContainer } onEnter={ this.redirectIfLoggedOut } />
          <Route path="/redirect" component={ Splash } onEnter={ this.redirectIfLoggedIn } />
          <Route path="/logout" component={ Splash } onEnter={ this.redirectIfLoggedOut } />
        </Route>
      </Router>
    </Provider>
  }
}

export default Root;
