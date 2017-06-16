import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';

import { login, logout, loginDemoUser } from './util/session_api_util';
window.login = login;
window.logout = logout;
window.loginDemoUser = loginDemoUser;
import { requestLogin, requestLogout, requestDemoUser } from './actions/session_actions';
window.requestLogin = requestLogin;
window.requestLogout = requestLogout;
window.requestDemoUser = requestDemoUser;

document.addEventListener('DOMContentLoaded', () => {
  let store = {};

  if (window.currentUser) {
    let preloadedState = { session: {
                             currentUser: window.currentUser,
                           errors: [] }
                         };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  window.store = store;

  ReactDOM.render(<Root store={ store } />, root);
});
